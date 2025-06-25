// src/components/Header.jsx
import { useContext, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export const Header = ({ openLoginModal, openRegisterModal, openCart, closeCart, isCartOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { totalCartItems } = useContext(CartContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/"); // Redirige a inicio u otra ruta si lo deseas
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white font-[Sansita-Swashed]">
      <div className="py-4 px-12">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <img src="/assets/logo.png" alt="Logo Pan Comido" className="w-24 h-24" />
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Pan Comido</h1>
          </div>

          {/* Enlaces */}
          <ul className="hidden md:flex gap-8 text-lg md:text-xl font-semibold">
            <li><Link to="/" className="hover:text-yellow-300 transition">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-yellow-300 transition">Productos</Link></li>
            <li><Link to="/nosotros" className="hover:text-yellow-300 transition">Nosotros</Link></li>
          </ul>

          {/* Carrito y cuenta */}
          <div className="flex items-center gap-12">
            <div className="relative group">
              <button onClick={isCartOpen ? closeCart : openCart}>
                <BsCart4 className="w-8 h-8" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
                    {totalCartItems}
                  </span>
                )}
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-lg hover:text-yellow-300 font-bold"
              >
                <FaRegUser className="w-6 h-6" />
                <span>{isAuthenticated ? "Mi cuenta" : "Ingresar"}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg z-50">
                  {!isAuthenticated ? (
                    <>
                      <button
                        onClick={() => { openLoginModal(); setDropdownOpen(false); }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg font-medium transition"
                      >
                        Iniciar Sesión
                      </button>
                      <button
                        onClick={() => { openRegisterModal(); setDropdownOpen(false); }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg font-medium transition"
                      >
                        Registro
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => { navigate("/historial-pedidos"); setDropdownOpen(false); }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg font-medium transition"
                      >
                        Historial de compras
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg font-medium transition"
                      >
                        Cerrar sesión
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
