import React from "react";
import ProductList from "../../components/ProductList";
import products from "../../data/products.json";

export const ProductsPage = () => {
  const addToCart = (product) => {
    console.log("Producto agregado al carrito:", product);
    // Lógica de carrito aquí
  };
  
  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};