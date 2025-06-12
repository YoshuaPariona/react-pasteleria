// src/pages/ProductsPage.jsx
import React, { useState, useContext } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ui/ProductCard";
import { CartContext } from "../../context/CartContext";

const filterByCategory = (products, category) => {
  return category === "todos" ? products : products.filter((prod) => prod.category === category);
};

export const ProductsPage = () => {
  const [category, setCategory] = useState("todos");
  const { addToCart } = useContext(CartContext);

  const filteredProducts = filterByCategory(products, category);
  const categories = ["todos", "pan", "pastelitos", "torta", "bocaditos", "pizza"];

  return (
    <div className=" bg-amber-100">
      <div className="mx-auto max-w-7xl px-8">
        <div className="p-6">
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {categories.map((cat) => (
              <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-discrete duration-100 ease-in-out transform shadow-md ${
                category === cat
                ? "bg-orange-500 text-white shadow-xl"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
