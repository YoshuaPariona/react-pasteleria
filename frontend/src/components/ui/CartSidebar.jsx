// src/components/ui/CartSidebar.jsx
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { useAuth } from "../../context/AuthContext";

export const CartSidebar = ({ isOpen, closeCart, openLoginModal }) => {
  const { cartItems, updateQuantity, removeItem, calculateTotal, clearCart } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { isAuthenticated, user } = useAuth();
  
  const [tipoPago, setTipoPago] = useState("efectivo");
  const [formaEntrega, setFormaEntrega] = useState("recojo");


  const handleCheckout = async () => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }

    const ventaPayload = {
      cliente_id: user.id,
      tipo_pago: tipoPago.toLowerCase(),
      numero_comprobante: `B001-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
      total: calculateTotal(),
      forma_entrega: formaEntrega.toLowerCase(),
      detalle: cartItems.map(item => ({
        producto_id: item.id,
        cantidad: item.quantity,
        precio_unitario: item.precio,
        descripcion: item.nombre
      }))
    };

    try {
      const ventaResponse = await fetch('http://localhost:8080/api/ventas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ventaPayload)
      });

      if (!ventaResponse.ok) throw new Error("Error en el registro de venta");

      clearCart();
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        closeCart();
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("Error al procesar la compra");
    }
  };

  return (
    <div
      className={`fixed top-[120px] right-0 h-[calc(100vh-120px)] z-40 w-100 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Tu Carrito</h2>
          <button onClick={closeCart} className="text-xl font-bold">×</button>
        </div>

        {/* Lista scrollable */}
        <ul className="space-y-4 overflow-y-auto flex-grow pr-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </ul>

        {/* Tipo de pago */}
        <div className="mb-2 border-t border-gray-300 pt-4">
          <label className="block text-sm font-medium mb-1">Tipo de pago</label>
          <select
            value={tipoPago}
            onChange={(e) => setTipoPago(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="yape">Yape</option>
            <option value="plin">Plin</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Forma de entrega */}
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Forma de entrega</label>
          <select
            value={formaEntrega}
            onChange={(e) => setFormaEntrega(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option value="recojo">Recojo</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        {showSuccess && (
          <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4 text-center">
            ¡Compra realizada con éxito!
          </div>
        )}
        {/* Total y botón */}
        <div className="pt-4 border-t border-gray-300 mt-4">
          <h2 className="text-xl font-bold mb-4">Total: S/ {calculateTotal()}</h2>
          <button onClick={handleCheckout}
            className="w-full bg-[#b4937c] hover:bg-[#8a6a55] text-white text-xl font-semibold py-3 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
            Proceder al pago
          </button>
        </div>

      </div>
    </div>
  );
};
