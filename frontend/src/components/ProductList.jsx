import React, { useState } from "react";

const ProductList = ({ products, addToCart }) => {
  const [categoria, setCategoria] = useState("todos");

  const filtrarPorCategoria = (productos, categoria) => {
    return categoria === "todos"
      ? productos
      : productos.filter((prod) => prod.category === categoria);
  };

  const productosFiltrados = filtrarPorCategoria(products, categoria);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-orange-600 text-center">Escoge</h2>

      <div className="tabs flex flex-wrap justify-center gap-2 mb-4">
        {["todos", "pan", "pastelitos", "torta", "bocaditos", "pizza"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-4 py-2 rounded-md transition ${
              categoria === cat ? "bg-orange-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {productosFiltrados.map((prod, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md w-52 text-center p-4">
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-800">{prod.name}</h2>
            <p className="text-sm text-gray-500 mb-1">Stock: {prod.stock}</p>
            <p className="text-lg font-bold text-orange-600">${prod.price.toFixed(2)}</p>
            <button
              className="mt-3 bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md transition"
              onClick={() => addToCart(prod)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
