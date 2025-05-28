export const Footer = () => {
  return (
    <footer className="relative w-full">
        
      <img
        src="src/assets/footer.jpg"
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <div className="relative z-10 text-white px-6 py-10 flex flex-col items-left">
        <div className="flex flex-col md:flex-row justify-around gap-6 w-full max-w-4xl text-center md:text-left">
          <div>
            <h2 className="text-lg font-semibold mb-1">Contacto</h2>
            <p>📞 987 654 321</p>
            <p>📧 panaderiadboyos@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">Redes</h2>
            <p>Facebook · Instagram · WhatsApp</p>
          </div>
        </div>

        <hr className="my-6 border-gray-600 w-full max-w-4xl" />

        <p className="text-sm text-gray-400 px-65">
          &copy; 2025 Panadería D'Boyos'. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
