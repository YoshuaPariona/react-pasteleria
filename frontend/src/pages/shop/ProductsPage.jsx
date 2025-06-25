// src/components/ProductDisplay.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ui/ProductCard';
import { CartContext } from '../../context/CartContext';


export const ProductsPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [productosPorCategoria, setProductosPorCategoria] = useState({});
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriasRes, productosRes] = await Promise.all([
          axios.get('http://localhost:8080/api/categorias'),
          axios.get('http://localhost:8080/api/productos'),
        ]);

        const categoriasData = categoriasRes.data;
        const productosData = productosRes.data;

        setCategorias(categoriasData);

        const agrupados = {};
        productosData.forEach((prod) => {
          const categoriaId = prod.categoria?.id;
          if (!agrupados[categoriaId]) {
            agrupados[categoriaId] = [];
          }
          agrupados[categoriaId].push(prod);
        });

        setProductosPorCategoria(agrupados);
      } catch (err) {
        console.error('Error cargando categorías o productos:', err);
      }
    };

    fetchData();
  }, []);


  return (
    <section id="compra" className="py-40 px-5 text-center">
      <h2 className="text-3xl font-serif mb-6">Escoge</h2>

      {!categoriaSeleccionada && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] w-[90%] mx-auto">
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer"
              onClick={() => setCategoriaSeleccionada(cat.id)}
            >
              <img 
                src={`http://localhost:8080/${cat.imagen}`} 
                alt={cat.nombre} 
                className="w-full h-44 object-cover" />
              <h3 className="mt-3 text-lg font-semibold">{cat.nombre}</h3>
            </div>
          ))}
        </div>
      )}

      {categoriaSeleccionada && (
        <div className="max-w-[1200px] w-[90%] mx-auto text-left">
          <button
            onClick={() => setCategoriaSeleccionada(null)}
            className="bg-[#b4937c] text-white p-3 rounded-lg text-lg font-semibold transition-transform transform duration-300 ease-in-out hover:bg-[#8a6a55] hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ← Volver a Categorías
          </button>

          <h3 className="text-xl font-bold mb-4">
            Productos de {categorias.find((c) => c.id === categoriaSeleccionada)?.nombre}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] w-[90%] mx-auto">
            {productosPorCategoria[categoriaSeleccionada]?.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

