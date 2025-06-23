
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HomePage = ({ addToCart }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/productos');
        const allProducts = response.data;

        // Seleccionar 6 productos aleatorios
        const shuffledProducts = [...allProducts].sort(() => 0.5 - Math.random());
        const randomProducts = shuffledProducts.slice(0, 6);

        setProducts(randomProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative w-full h-[calc(100vh)]">
        <img
          src="assets/home.jpg"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10 text-white text-center gap-6">
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className="text-8xl mb-4">Sweet Treats, Perfect Eats</h2>
            <p className="text-4xl">Delicias horneadas con amor cada día</p>
            <a className="bg-[#b4937c] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform duration-300 ease-in-out hover:bg-[#8a6a55] hover:scale-105 shadow-lg hover:shadow-xl"
              href="#productos"
            >Ver productos</a>
            <a className="bg-[#b4937c] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform duration-300 ease-in-out hover:bg-[#8a6a55] hover:scale-105 shadow-lg hover:shadow-xl"
              href="#inicio"
            >Comprar Ahora</a>
          </div>
        </div>
      </div>
      <section
        id="productos"
        className="bg-cover bg-center p-5 h-[100vh]"
        style={{ backgroundImage: "url('assets/tarjeta_20.png')" }}
      >
        <span id="pedidos"></span>
        <h2 className="text-center m-10 text-5xl font-bold">Top Productos</h2>
        <div className="grid grid-cols-2 gap-8 justify-center max-w-screen-xl w-3/5 mx-auto md:grid-cols-3">
          {products.map((product) => (
            <div className="bg-amber-50 m-[0.5px] space-y-1 rounded-lg shadow-md w-full text-center p-4 text-lg" key={product.id}>
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={`http://localhost:8080/${product.imagen}`}
                alt={product.nombre}
              />
              <h3>{product.nombre}</h3>
              <p>S/{product.precio.toFixed(2)}</p>
              <button
                className="bg-[#b4937c] text-white py-2 px-4 rounded-md cursor-pointer"
                onClick={() => addToCart(product)}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
