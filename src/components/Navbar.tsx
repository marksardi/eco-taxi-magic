
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-eco font-bold text-xl">Eco Taxi</span>
              <span className="ml-1 text-eco-dark">Esztergom</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-eco transition-colors duration-200">Főoldal</a>
            <a href="#services" className="text-gray-700 hover:text-eco transition-colors duration-200">Szolgáltatások</a>
            <a href="#area" className="text-gray-700 hover:text-eco transition-colors duration-200">Szolgáltatási terület</a>
            <a href="#vehicle" className="text-gray-700 hover:text-eco transition-colors duration-200">Járművünk</a>
            <a href="#contact" className="text-gray-700 hover:text-eco transition-colors duration-200">Kapcsolat</a>
            <a href="tel:+36301234567" className="bg-eco hover:bg-eco-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
              Hívás most
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-eco">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-eco">Főoldal</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-eco">Szolgáltatások</a>
            <a href="#area" className="block px-3 py-2 text-gray-700 hover:text-eco">Szolgáltatási terület</a>
            <a href="#vehicle" className="block px-3 py-2 text-gray-700 hover:text-eco">Járművünk</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-eco">Kapcsolat</a>
            <a href="tel:+36301234567" className="block px-3 py-2 bg-eco text-white rounded-md mt-4 text-center">
              Hívás most
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
