// src/components/ui/ProductCard.jsx
import React from 'react';

export const ProductCard = ({ producto, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
      <img
        src={`http://localhost:8080/${producto.imagen}`}
        alt={producto.nombre}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-semibold mb-1">{producto.nombre}</h4>
        <p className="text-[#b4937c] font-bold mb-2">S/{producto.precio.toFixed(2)}</p>
        <button
          className="bg-[#b4937c] text-white px-4 py-2 rounded hover:bg-[#8a6a55]"
          onClick={() => onAddToCart(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
