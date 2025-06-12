// src/pages/shop/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/ui/CartItem';

export const CartPage = () => {
  const { cartItems, updateQuantity, removeItem, calculateTotal } = useContext(CartContext);

  return (
    <div className="bg-amber-100 min-h-screen">
      <div className="mx-auto max-w-7xl px-8">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Carrito de Compras</h1>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Tu carrito está vacío.</p>
            ) : (
              <ul className="space-y-4">
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
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Total: ${calculateTotal()}</h2>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
