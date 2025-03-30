
import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
  const mainAreas = [
    "Esztergom",
    "Dorog",
    "Pilismarót",
    "Pilisszentlélek",
    "Dömös",
    "Tát",
    "Tokod",
    "Kesztölc",
    "Piliscsév",
    "Leányvár"
  ];

  const otherAreas = [
    "Pilisszentkereszt",
    "Szentendre",
    "Visegrád",
    "Komárom",
    "Tata",
    "Budapest (előzetes egyeztetéssel)"
  ];

  return (
    <section id="area" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Szolgáltatási Területünk</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elsősorban Esztergomban és vonzáskörzetében vállalunk fuvarokat, de igény esetén távolabbi úticélok is elérhetőek.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-6 flex items-center">
                  <MapPin className="h-5 w-5 text-eco mr-2" />
                  Fő szolgáltatási területeink
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {mainAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-eco rounded-full mr-2"></span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-bold text-xl mt-8 mb-6 flex items-center">
                  <MapPin className="h-5 w-5 text-sky-dark mr-2" />
                  Igény szerint elérhető területek
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {otherAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-sky-dark rounded-full mr-2"></span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-eco/10 rounded-xl transform rotate-3"></div>
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43015.49214767297!2d18.720726290465857!3d47.78330073357742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5eb9f8bb9407%3A0x400c4290c1e1190!2sEsztergom!5e0!3m2!1shu!2shu!4v1717094068761!5m2!1shu!2shu" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Esztergom térkép"
                ></iframe>
                <div className="p-4 bg-eco text-white">
                  <p className="font-medium">
                    Fedezze fel szolgáltatási területünket! Bárhol is legyen Esztergomban és környékén, mi ott vagyunk Önért.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
