// src/pages/shop/CartPage.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../../components/ui/CartItem';


export const CartPage = () => {
  const { cartItems, updateQuantity, removeItem, calculateTotal } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-amber-100 min-h-screen pt-[120px]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Carrito de Compras</h1>

          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            {isCartOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
          </button>

          {/* Carrito lateral */}
          <div
            className={`fixed top-[120px] right-0 h-[calc(100vh-120px)] w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
              isCartOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>

              {cartItems.length === 0 ? (
                <p className="text-center text-gray-600 flex-1">Tu carrito está vacío.</p>
              ) : (
                <ul className="space-y-4 overflow-y-auto flex-1">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                    />
                  ))}
                </ul>
              )}

              <div className="mt-4">
                <h2 className="text-xl font-bold mb-4">Total: S/{calculateTotal()}</h2>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  Proceder al pago
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
