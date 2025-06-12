export const Footer = () => {
  return (
    <footer className="relative w-full">
      <img
        src="assets/footer.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <div className="relative z-10 text-white px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 w-full max-w-6xl mx-auto">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Contacto</h2>
            <p className="mb-2">📞 987 654 321</p>
            <p>📧 panaderiadboyos@gmail.com</p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Redes Sociales</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
              <a href="#" className="hover:text-gray-300">WhatsApp</a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-600 w-full max-w-6xl mx-auto" />

        <p className="text-sm text-gray-400 text-center">
          &copy; 2025 Panadería D'Boyos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
