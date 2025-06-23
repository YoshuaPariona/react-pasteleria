// src/pages/shop/CartPage.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/ui/CartItem';

export const CartPage = () => {
  const { cartItems, updateQuantity, removeItem, calculateTotal } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-amber-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Carrito de Compras</h1>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            {isCartOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
          </button>
          <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Tu carrito está vacío.</p>
              ) : (
                <ul className="space-y-4 overflow-y-auto max-h-96">
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
                <h2 className="text-xl font-bold mb-4">Total: ${calculateTotal()}</h2>
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
