// src/components/Header.jsx
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const { totalCartItems } = useContext(CartContext);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white font-[Sansita-Swashed]">
      <div className="bg-black/80 backdrop-blur-md py-4 px-12">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <img
              src="/assets/logo.png"
              alt="Logo Pan Comido"
              className="w-24 h-24"
            />
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Pan Comido</h1>
          </div>

          {/* Enlaces */}
          <ul className="hidden md:flex gap-8 text-lg md:text-xl font-semibold">
            <li><a href="#inicio" className="hover:text-yellow-300 transition">Inicio</a></li>
            <li><a href="#productos" className="hover:text-yellow-300 transition">Productos</a></li>
            <li><a href="#nosotros" className="hover:text-yellow-300 transition">Nosotros</a></li>
          </ul>

          {/* Carrito y cuenta */}
          <div className="flex items-center gap-12">
            {/* Carrito */}
            <a href="/carrito" className="relative group">
              <button className="text-white font-bold w-12 h-12 transition hover:text-yellow-300 flex items-center justify-center">
                <BsCart4  className="w-8 h-8 text-white hover:text-yellow-300" />
              </button>
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#b4937c] text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </a>

            {/* Cuenta */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:text-yellow-300 font-bold text-lg md:text-lg"
              >
                <FaRegUser className="w-6 h-6" />
                <span>Mi cuenta</span>
                <svg className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg transition-all duration-200 transform z-50 ${isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
              >
                <a href="/login" className="block px-4 py-2 hover:bg-gray-200 rounded-lg font-medium transition">Iniciar Sesión</a>
                <a href="/registro" className="block px-4 py-2 hover:bg-gray-200 rounded-lg font-medium transition">Registro</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

  );
};

