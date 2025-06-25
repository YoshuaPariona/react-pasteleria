// src/components/RegisterModal.jsx
import { useEffect, useRef, useState } from "react";

export const RegisterModal = ({ isOpen, closeModal }) => {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    nombres: "",
    email: "",
    telefono: "",
    direccion: "",
    password: ""
  });

  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Registro fallido");

      alert("Registro exitoso. Ya puedes iniciar sesión.");
      closeModal();
    } catch (err) {
      console.error(err);
      alert("Error al registrar. Intenta más tarde.");
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
        <h2 className="text-2xl font-semibold mb-4 text-center">Registro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombres"
            placeholder="Nombre completo"
            value={formData.nombres}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border rounded-lg"
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};
