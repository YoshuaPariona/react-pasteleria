// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center text-white py-10 px-6" style={{ backgroundImage: "url('assets/footer.avif')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 p-4">
            <div className="flex items-center mb-4">
              <img src="assets/logo.png" alt="Logo" className="mr-2 w-12 h-12" />
              <span className="text-2xl font-bold">Pan Comido</span>
            </div>
            <p className="mb-4">
              Disfruta de nuestros deliciosos pasteles hechos con amor y pasión.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Horario de Apertura</h2>
            <ul className="space-y-2">
              <li className="text-center">Domingo: 2 pm a 10 pm</li>
              <li className="text-center">Lun - Jue: 10 am a 10 pm</li>
              <li className="text-center">Vie - Sáb: 9 am a 8 pm</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Contáctanos</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <FaMapMarkerAlt className="mr-2" /> N°: 58 A, Calle Este Madison, USA 4508
              </li>
              <li className="flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> Número de contacto: 0000 - 123 - 456789
              </li>
              <li className="flex items-center justify-center">
                <FaEnvelope className="mr-2" /> info@example.com
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
