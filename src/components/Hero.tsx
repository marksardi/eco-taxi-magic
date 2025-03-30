
import React from 'react';
import { CarTaxiFront, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 hero-pattern overflow-hidden">
      <div className="absolute top-20 -left-4 w-72 h-72 bg-eco-light/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-light/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <div className="flex items-center mb-4">
              <Leaf className="text-eco mr-2 h-6 w-6" />
              <span className="text-eco font-medium">100% Elektromos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Környezetbarát</span> <br />
              <span className="text-eco">Taxi Szolgáltatás</span> <br />
              <span className="text-gray-800">Esztergomban</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Válassza zöld és megbízható taxi szolgáltatásunkat Esztergomban és környékén. 
              Elektromos Kia e-Niro taxink nemcsak kényelmes utazást, hanem környezetbarát 
              közlekedést is biztosít.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+36301234567" 
                className="bg-eco hover:bg-eco-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-center"
              >
                Hívás Most
              </a>
              <a 
                href="#services" 
                className="bg-white hover:bg-gray-50 text-eco border border-eco font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-center"
              >
                Szolgáltatásaink
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-eco/10 rounded-full animate-float"></div>
              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden border-8 border-white animate-fade-in">
                <img 
                  src="/kia-e-niro.jpg" 
                  alt="Elektromos Kia e-Niro taxi" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-eco-dark/80 to-transparent p-6 text-white">
                  <div className="flex items-center">
                    <CarTaxiFront className="h-8 w-8 mr-3" />
                    <div>
                      <p className="font-bold text-xl">Kia e-Niro</p>
                      <p className="text-white/90">100% Elektromos Taxi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
