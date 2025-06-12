// src/components/ui/FloatingCartButton.jsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const FloatingCartButton = ({ show }) => {
  const { totalCartItems } = useContext(CartContext);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4">
      <a href="/carrito" className="relative">
        <button className="bg-orange-500 text-white font-bold w-16 h-16 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        {totalCartItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {totalCartItems}
          </span>
        )}
      </a>
    </div>
  );
};

export default FloatingCartButton;
