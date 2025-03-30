
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 p-3 rounded-full bg-eco-light/30 text-eco">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {content}
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Kapcsolat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot taxiszolgáltatásunk igénybevételéhez vagy további információkért.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactCard 
            icon={<Phone className="h-6 w-6" />}
            title="Telefon"
            content={
              <a href="tel:+36301234567" className="text-eco hover:underline text-center">
                +36 30 123 4567
              </a>
            }
          />
          
          <ContactCard 
            icon={<Mail className="h-6 w-6" />}
            title="E-mail"
            content={
              <a href="mailto:info@ecotaxiesztergom.hu" className="text-eco hover:underline text-center break-all">
                info@ecotaxiesztergom.hu
              </a>
            }
          />
          
          <ContactCard 
            icon={<MapPin className="h-6 w-6" />}
            title="Szolgáltatási terület"
            content={
              <p className="text-gray-600 text-center">
                Esztergom és vonzáskörzete
              </p>
            }
          />
          
          <ContactCard 
            icon={<Clock className="h-6 w-6" />}
            title="Nyitvatartás"
            content={
              <div className="text-gray-600 text-center">
                <p>Hétfő - Péntek: 06:00 - 22:00</p>
                <p>Szombat: 08:00 - 22:00</p>
                <p>Vasárnap: 08:00 - 20:00</p>
              </div>
            }
          />
        </div>
        
        <div className="mt-20 bg-eco bg-opacity-10 rounded-xl p-8 border border-eco/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Rendeljen most taxit!</h3>
              <p className="text-gray-600 mb-6">
                Azonnali indulás vagy előfoglalás - állunk rendelkezésére környezetbarát taxiszolgáltatásunkkal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+36301234567" 
                  className="bg-eco hover:bg-eco-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Hívás Most
                </a>
                <a 
                  href="https://wa.me/36301234567" 
                  className="bg-white text-eco border border-eco font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="/eco-taxi-qr.jpg" 
                alt="QR kód a gyors kapcsolathoz" 
                className="w-48 h-48 rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
