// src/components/Header.jsx
import { useState } from 'react';

// Definición de constantes para los colores
const COLORS = {
  HEADER_BG: "bg-amber-600",
  TEXT: "text-white",
  HOVER_TEXT: "hover:text-yellow-300",
  DROPDOWN_BG: "bg-white",
  DROPDOWN_TEXT: "text-black",
  DROPDOWN_HOVER_BG: "hover:bg-gray-200",
};

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`${COLORS.HEADER_BG} ${COLORS.TEXT} px-10 py-4`}>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="assets/logo.webp"
            alt="Logo"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <h1 className="text-3xl font-bold">PANADERÍA DELICIA</h1>
        </div>
        <ul className="flex gap-6 text-xl">
          <li>
            <a className={`${COLORS.HOVER_TEXT} transition duration-300 ease-in-out font-bold`} href="/">
              INICIO
            </a>
          </li>
          <li>
            <a className={`${COLORS.HOVER_TEXT} transition duration-300 ease-in-out font-bold`} href="/productos">
              PRODUCTOS
            </a>
          </li>
          <li>
            <a className={`${COLORS.HOVER_TEXT} transition duration-300 ease-in-out font-bold`} href="/nosotros">
              NOSOTROS
            </a>
          </li>
        </ul>
        <div className="relative">
          <button onClick={toggleDropdown} className={`${COLORS.HOVER_TEXT} transition duration-300 ease-in-out font-bold`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className={`absolute right-0 mt-2 w-48 ${COLORS.DROPDOWN_BG} ${COLORS.DROPDOWN_TEXT} rounded-md shadow-lg z-10`}>
              <a href="/iniciar-sesion" className={`block px-4 py-2 ${COLORS.DROPDOWN_HOVER_BG} font-bold`}>INICIAR SESIÓN</a>
              <a href="/registro" className={`block px-4 py-2 ${COLORS.DROPDOWN_HOVER_BG} font-bold`}>REGISTRO</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
