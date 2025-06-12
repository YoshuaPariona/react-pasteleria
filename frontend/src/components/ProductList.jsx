import React, { useState } from "react";
import ProductCard from "./ui/ProductCard";

const ProductList = ({ products, addToCart }) => {
  const [categoria, setCategoria] = useState("todos");

  const filtrarPorCategoria = (productos, categoria) => {
    return categoria === "todos"
      ? productos
      : productos.filter((prod) => prod.category === categoria);
  };

  const productosFiltrados = filtrarPorCategoria(products, categoria);

  const categorias = ["todos", "pan", "pastelitos", "torta", "bocaditos", "pizza"];

  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="p-6">
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-discrete duration-100 ease-in-out transform shadow-md ${
                categoria === cat
                  ? " bg-orange-500 text-white shadow-xl"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {productosFiltrados.map((prod, index) => (
            <ProductCard key={index} product={prod} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
