
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between pb-10 border-b border-gray-700">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Leaf className="text-eco mr-2 h-6 w-6" />
              <span className="text-2xl font-bold text-white">
                Eco Taxi<span className="text-eco"> Esztergom</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Környezetbarát taxi szolgáltatás Esztergomban és környékén. 
              100% elektromos járművel, a természet és a jövő generációk védelme érdekében.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Szolgáltatások</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-eco">Helyi fuvarozás</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-eco">Környékbeli utak</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-eco">Reptéri transzfer</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-eco">Előfoglalás</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Területek</h3>
              <ul className="space-y-2">
                <li><a href="#area" className="text-gray-400 hover:text-eco">Esztergom</a></li>
                <li><a href="#area" className="text-gray-400 hover:text-eco">Dorog</a></li>
                <li><a href="#area" className="text-gray-400 hover:text-eco">Pilismarót</a></li>
                <li><a href="#area" className="text-gray-400 hover:text-eco">Tát</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+36301234567" className="text-gray-400 hover:text-eco">
                    +36 30 123 4567
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ecotaxiesztergom.hu" className="text-gray-400 hover:text-eco">
                    info@ecotaxiesztergom.hu
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">
                    Esztergom, Magyarország
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Eco Taxi Esztergom. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
