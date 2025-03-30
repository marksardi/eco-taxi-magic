
import React from 'react';
import { Leaf, Battery, Zap, Timer } from 'lucide-react';

const FeatureCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className="bg-eco/10 rounded-full p-3 mr-4">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

const VehicleShowcase = () => {
  return (
    <section id="vehicle" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-eco-light/30 text-eco-dark px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            100% ELEKTROMOS
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Kia e-Niro - A Mi Zöld Taxink</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fedezze fel elektromos járművünket, amely nemcsak kényelmet és biztonságot nyújt, hanem környezetünket is védi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-eco/10 rounded-full"></div>
            <img 
              src="/kia-e-niro-side.jpg" 
              alt="Kia e-Niro elektromos taxi" 
              className="relative z-10 rounded-xl shadow-xl"
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <FeatureCard 
                icon={<Battery className="h-6 w-6 text-eco" />}
                title="Hatótávolság"
                value="455 km"
              />
              <FeatureCard 
                icon={<Zap className="h-6 w-6 text-eco" />}
                title="Motor teljesítmény"
                value="204 LE"
              />
              <FeatureCard 
                icon={<Leaf className="h-6 w-6 text-eco" />}
                title="CO2 kibocsátás"
                value="0 g/km"
              />
              <FeatureCard 
                icon={<Timer className="h-6 w-6 text-eco" />}
                title="0-100 km/h"
                value="7.8 mp"
              />
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Miért válassza elektromos taxinkat?</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-eco text-white">
                      <Leaf className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Környezetbarát</h4>
                    <p className="text-gray-600 mt-2">
                      0 károsanyag-kibocsátás, hozzájárulva a tisztább levegőhöz és a fenntarthatóbb jövőhöz.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-eco text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Kedvező árak</h4>
                    <p className="text-gray-600 mt-2">
                      Az elektromos működés alacsonyabb üzemeltetési költségeket jelent, amit az árainkban is érvényesítünk.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-eco text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Csendes és kényelmes</h4>
                    <p className="text-gray-600 mt-2">
                      Élvezze a halk, vibrálásmentes utazást és a tágas, kényelmes utasteret taxinkban.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-eco text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Modern felszereltség</h4>
                    <p className="text-gray-600 mt-2">
                      USB-töltők, klíma, kényelmes ülések és modern biztonsági rendszerek minden utazáshoz.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-eco/10 p-4 rounded-lg border border-eco/20">
                <p className="text-gray-700 italic">
                  "Utazzon elektromosan, a környezetünk és a jövő generációk érdekében. Válassza az Eco Taxi Esztergom szolgáltatását!"
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-eco-dark bg-opacity-90 rounded-xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 3H17V17" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 12H9M15 12H12M12 12V9M12 12V15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Környezetvédelmi hatás</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-white/80">Elektromos meghajtás</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">0g</div>
                  <p className="text-white/80">CO2 kibocsátás</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">~4500kg</div>
                  <p className="text-white/80">CO2 megtakarítás évente</p>
                </div>
              </div>
              
              <p className="text-white/90 max-w-3xl mx-auto text-center">
                Válassza az elektromos taxinkat és járuljon hozzá a tisztább levegőhöz és környezetünk védelméhez. 
                Minden fuvar, amelyet elektromos taxinkkal tesz meg, hozzájárul a károsanyag-kibocsátás csökkentéséhez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
