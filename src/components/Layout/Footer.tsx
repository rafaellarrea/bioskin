import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-[#deb887] mr-2" />
              <span className="font-bold text-lg">BIO SKIN</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Centro de estética profesional en Cuenca, Ecuador. Ofrecemos tratamientos faciales personalizados con aparatología de alta gama para mejorar tu piel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#deb887] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#deb887] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diagnostico-facial" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Diagnóstico Facial
                </Link>
              </li>
              <li>
                <Link to="/tratamientos" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Limpieza Facial Profunda
                </Link>
              </li>
              <li>
                <Link to="/tratamientos" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Tratamientos Antiaging
                </Link>
              </li>
              <li>
                <Link to="/tratamientos" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Hollywood Peel
                </Link>
              </li>
              <li>
                <Link to="/tratamientos" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Remoción de Tatuajes
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/resultados" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Resultados
                </Link>
              </li>
              <li>
                <Link to="/gift-card" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Gift Card
                </Link>
              </li>
              <li>
                <Link to="/agenda-cita" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Agenda tu Cita
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-600 hover:text-[#deb887] text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#deb887] mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Av. Principal 123, Cuenca, Ecuador
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-[#deb887] mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Lun - Vie: 9:00 - 19:00<br />
                  Sáb: 9:00 - 14:00
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#deb887] mr-2" />
                <a 
                  href="tel:+593XXXXXXXXX" 
                  className="text-gray-600 text-sm hover:text-[#deb887] transition-colors"
                >
                  +593 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#deb887] mr-2" />
                <a 
                  href="mailto:info@bioskinsalud.com" 
                  className="text-gray-600 text-sm hover:text-[#deb887] transition-colors"
                >
                  info@bioskinsalud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} BIO SKIN SALUD Y ESTÉTICA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;