// src/components/LoginModal.jsx
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

export const LoginModal = ({ isOpen, closeModal }) => {
  const modalRef = useRef(null);
  const { setIsAuthenticated, setUser } = useAuth();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/clientes/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (!res.ok) throw new Error("Login fallido");

      const data = await res.json();
      if (data?.id) {
        setIsAuthenticated(true);
        setUser(data);
        closeModal();
      } else {
        alert("Credenciales inválidas");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className="bg-white p-8 rounded-lg max-w-md w-full relative">
        <button onClick={closeModal} className="absolute top-4 right-4 text-xl font-bold">X</button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar sesión</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={loginData.email}
            onChange={handleLoginChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
