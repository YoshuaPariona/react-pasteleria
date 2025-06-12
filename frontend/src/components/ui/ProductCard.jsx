// src/components/ui/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full w-60 m-1">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <p className="text-lg font-bold text-orange-600">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300"
            onClick={() => addToCart(product)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
