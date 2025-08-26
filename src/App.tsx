import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Award, Zap, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Minimalistic Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-black tracking-tight text-white">
                EPIC GYM
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Acasă</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69e27dbc4a5bcbde00b7fd64e7e2e98c9&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black bg-opacity-90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6">
            <span className="text-white">EPIC GYM</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Pregătește-te pentru experiența fitness definitivă. 
            <span className="text-blue-500 font-semibold"> EPIC GYM </span> 
            vine în curând în Orăștie!
          </p>

          <div className="bg-slate-800 bg-opacity-80 border border-slate-600 rounded-lg p-4 sm:p-6 mb-8 backdrop-blur-sm mx-4">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3" />
              <h3 className="text-lg sm:text-xl font-bold text-purple-400">Locație</h3>
            </div>
            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed">
              Str. Armatei, nr. 1, etaj 2<br />
              Complex Palia, Orăștie, Hunedoara
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl inline-block mb-8 mx-4">
            Curând în Orăștie!
          </div>

          <div className="animate-bounce">
            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-500 rounded-full mx-auto"></div>
          </div>
        </div>

      </section>

      {/* Coming Soon Section */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8">Curând în Orăștie!</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100 px-4">
            Ne pregătim să deschidem cea mai modernă sală de fitness din oraș. 
            Fii parte din comunitatea EPIC GYM!
          </p>
          
          {/* Social Media CTA Buttons */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Urmărește-ne pentru actualizări!</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a 
                href="https://facebook.com/epicgymorastie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <Facebook className="w-6 h-6 mr-3" />
                Facebook
              </a>
              <a 
                href="https://instagram.com/epicgymorastie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="w-6 h-6 mr-3" />
                Instagram
              </a>
              <a 
                href="https://x.com/epicgymorastie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <Twitter className="w-6 h-6 mr-3" />
                X
              </a>
              <a 
                href="https://tiktok.com/@epicgymorastie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-lg">
            <div className="flex items-center px-3 py-2 bg-black bg-opacity-30 rounded-lg">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span>24/7 Access</span>
            </div>
            <div className="flex items-center px-3 py-2 bg-black bg-opacity-30 rounded-lg">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span>Grup Classes</span>
            </div>
            <div className="flex items-center px-3 py-2 bg-black bg-opacity-30 rounded-lg">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              <span>Personal Training</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Legal Compliance */}
      <footer id="contact" className="bg-black py-12 sm:py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-white">EPIC GYM</h3>
              <p className="text-gray-400 mb-4">
                Sala de fitness premium din Orăștie, dedicată să-ți ofere cea mai bună experiență de antrenament.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Str. Armatei, nr. 1, etaj 2, Complex Palia, Orăștie, Hunedoara</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+40 723109766</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">contact@epicgym.ro</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-purple-400">Informații Legale</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/termeni-conditii" className="hover:text-white transition-colors">Termeni și Condiții</a></li>
                <li><a href="/politica-confidentialitate" className="hover:text-white transition-colors">Politica de Confidențialitate</a></li>
                <li><a href="/gdpr" className="hover:text-white transition-colors">GDPR</a></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Politica Cookies</a></li>
                <li><a href="/detalii-firma" className="hover:text-white transition-colors">Detalii Firmă</a></li>
              </ul>
            </div>

            {/* Consumer Protection */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-400">Protecția Consumatorului</h4>
              <div className="mb-4">
                <a 
                  href="https://anpc.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                 
                  <img 
                    src="/public/anpc-sol.png" 
                    alt="ANPC Logo" 
                    className="h-12 sm:h-16 w-auto bg-white p-2 rounded"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }} className="bg-white text-black p-4 rounded text-center font-bold">
                    ANPC
                  </div>
              </a>
              <div className="mb-4">
                <a 
                  href="https://consumer-redress.ec.europa.eu/index_en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                 
                  <img 
                    src="/public/anpc-sal.png" 
                    alt="ANPC Logo" 
                    className="h-12 sm:h-16 w-auto bg-white p-2 rounded"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }} className="bg-white text-black p-4 rounded text-center font-bold">
                    ANPC
                  </div>
                </a>
              </div>
              
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ANPC - Autoritatea Națională pentru Protecția Consumatorilor</a></li>
                <li><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Platforma ODR</a></li>
                <li><a href="/reclamatii" className="hover:text-white transition-colors">Soluționarea Reclamațiilor</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
              <p>&copy; 2024 EPIC GYM. Toate drepturile rezervate.</p>
              <p className="mt-1">CUI: 51672421 | J2025028847002</p>
              <p className="mt-1">Cont bancar: RO76BTRLRONCRT0694042601</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-400">
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/cariere" className="hover:text-white transition-colors">Cariere</a>
              <a href="/parteneri" className="hover:text-white transition-colors">Parteneri</a>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;