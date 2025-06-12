// src/components/ui/CartItem.jsx
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <li key={item.id} className="flex items-center bg-gray-50 p-4 rounded-lg">
    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
    <div className="flex-grow ml-4">
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-600">${item.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-l"
      >
        -
      </button>
      <span className="bg-gray-100 text-gray-800 font-medium py-1 px-4">
        {item.quantity}
      </span>
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-r"
      >
        +
      </button>
      <button
        onClick={() => removeItem(item.id)}
        className="ml-4 text-red-500 hover:text-red-700 font-bold"
      >
        Eliminar
      </button>
    </div>
  </li>
);

export default CartItem;
