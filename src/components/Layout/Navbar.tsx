import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = "relative text-gray-800 hover:text-[#deb887] px-3 py-2 text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#deb887] after:left-0 after:right-0 after:bottom-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full";
  const activeNavLinkClass = "text-[#deb887] after:w-full";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#deb887]" />
            <span className="font-bold text-xl tracking-tight">
              <span className="text-gray-900">BIO SKIN</span>
              <span className="text-[#deb887]"> SALUD Y ESTÉTICA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass
            }>
              Inicio
            </NavLink>
            <NavLink to="/servicios" className={({ isActive }) => 
              isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass
            }>
              Servicios
            </NavLink>
            <NavLink to="/diagnostico-facial" className={({ isActive }) => 
              isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass
            }>
              Diagnóstico Facial
            </NavLink>
            <NavLink to="/tratamientos" className={({ isActive }) => 
              isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass
            }>
              Tratamientos
            </NavLink>
            <NavLink to="/resultados" className={({ isActive }) => 
              isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass
            }>
              Resultados
            </NavLink>
            <NavLink to="/gift-card" className={({ isActive }) => 
              isActive ? `${navLinkClass} ${activeNavLinkClass}` : navLinkClass
            }>
              Gift Card
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/agenda-cita"
              className="ml-4 px-4 py-2 rounded-full bg-[#deb887] text-white font-medium text-sm transition-all duration-300 hover:bg-[#c9a677] hover:shadow-lg hover:scale-105"
            >
              Agenda tu Cita
            </Link>
            <a 
              href="https://wa.me/593XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-3 text-gray-700 hover:text-[#deb887] transition-colors duration-300"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#deb887] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
          <div className="flex flex-col space-y-2 px-2">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-[#deb887]' : 'text-gray-700 hover:text-[#deb887]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/servicios"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-[#deb887]' : 'text-gray-700 hover:text-[#deb887]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </NavLink>
            <NavLink 
              to="/diagnostico-facial"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-[#deb887]' : 'text-gray-700 hover:text-[#deb887]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Diagnóstico Facial
            </NavLink>
            <NavLink 
              to="/tratamientos"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-[#deb887]' : 'text-gray-700 hover:text-[#deb887]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Tratamientos
            </NavLink>
            <NavLink 
              to="/resultados"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-[#deb887]' : 'text-gray-700 hover:text-[#deb887]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Resultados
            </NavLink>
            <NavLink 
              to="/gift-card"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-[#deb887]' : 'text-gray-700 hover:text-[#deb887]'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Gift Card
            </NavLink>
            <NavLink 
              to="/agenda-cita"
              className="px-3 py-2 mt-1 rounded-full bg-[#deb887] text-white text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Agenda tu Cita
            </NavLink>
            <a 
              href="https://wa.me/593XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 flex items-center space-x-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span>Contáctanos</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;