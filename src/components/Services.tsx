
import React from 'react';
import { CarTaxiFront, Airplane, MapPin, Clock } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-eco">
      <div className="bg-eco/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Szolgáltatásaink</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fedezze fel környezetbarát taxi szolgáltatásainkat, amelyek Esztergom és környékén mindig rendelkezésre állnak.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<CarTaxiFront className="h-8 w-8 text-eco" />}
            title="Helyi Fuvarozás"
            description="Megbízható és kényelmes személyszállítás Esztergom városában, bárhonnan bárhová."
          />
          
          <ServiceCard 
            icon={<MapPin className="h-8 w-8 text-eco" />}
            title="Környékbeli Utak"
            description="Esztergom vonzáskörzetében is vállalunk utakat, fedezze fel a környék településeit."
          />
          
          <ServiceCard 
            icon={<Airplane className="h-8 w-8 text-eco" />}
            title="Reptéri Transzfer"
            description="Kényelmes és pontos transzfer a Liszt Ferenc reptérre és onnan vissza Esztergomba."
          />
          
          <ServiceCard 
            icon={<Clock className="h-8 w-8 text-eco" />}
            title="Előfoglalás"
            description="Foglaljon időben, hogy biztosan rendelkezésre álljon járművünk amikor szüksége van rá."
          />
        </div>
        
        <div className="mt-12 bg-eco bg-opacity-10 rounded-xl p-6 sm:p-8 border border-eco/30">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/3">
              <h3 className="text-xl font-bold mb-2">Speciális igénye van?</h3>
              <p className="text-gray-600 mb-4 sm:mb-0">
                Hosszabb utazás, csoportos transzfer vagy egyedi időpont? Hívjon minket, és megbeszéljük a részleteket!
              </p>
            </div>
            <div className="sm:w-1/3 text-center sm:text-right">
              <a 
                href="tel:+36301234567" 
                className="inline-block bg-eco hover:bg-eco-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Hívás Most
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
