import React from 'react';
import { ArrowLeft, Cookie, Settings, BarChart, Target } from 'lucide-react';

function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center text-gray-300 hover:text-white transition-colors mr-6">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Înapoi
              </a>
              <h1 className="text-2xl font-black tracking-tight text-white">
                EPIC GYM
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black mb-8">Politica Cookies</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Ce sunt Cookie-urile?</h2>
            <p className="mb-4">
              Cookie-urile sunt fișiere mici de text care sunt stocate pe dispozitivul dumneavoastră 
              când vizitați un site web. Ele sunt utilizate pe scară largă pentru a face site-urile 
              web să funcționeze mai eficient și pentru a furniza informații proprietarilor site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cum Utilizăm Cookie-urile</h2>
            <p className="mb-6">
              EPIC GYM utilizează cookie-uri pentru a îmbunătăți experiența dumneavoastră pe site-ul nostru:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Cookie-uri Esențiale</h3>
                </div>
                <p className="text-sm mb-3">
                  Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Autentificare utilizatori</li>
                  <li>• Securitate site</li>
                  <li>• Preferințe de limbă</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <BarChart className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Cookie-uri Analitice</h3>
                </div>
                <p className="text-sm mb-3">
                  Ne ajută să înțelegem cum vizitatorii interactionează cu site-ul nostru.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Google Analytics</li>
                  <li>• Statistici de utilizare</li>
                  <li>• Îmbunătățirea performanței</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Cookie-uri Marketing</h3>
                </div>
                <p className="text-sm mb-3">
                  Utilizate pentru a vă afișa reclame relevante pe alte site-uri.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Facebook Pixel</li>
                  <li>• Google Ads</li>
                  <li>• Remarketing</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Cookie-uri Funcționale</h3>
                </div>
                <p className="text-sm mb-3">
                  Permit site-ului să își amintească alegerile pe care le faceți.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Preferințe utilizator</li>
                  <li>• Setări personalizate</li>
                  <li>• Conținut adaptat</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookie-uri Terțe Părți</h2>
            <p className="mb-4">
              Site-ul nostru poate conține cookie-uri de la servicii terțe părți:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> Pentru analiza traficului site-ului</li>
              <li><strong>Facebook:</strong> Pentru integrarea cu rețelele sociale</li>
              <li><strong>Instagram:</strong> Pentru afișarea conținutului social</li>
              <li><strong>YouTube:</strong> Pentru redarea videoclipurilor integrate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Gestionarea Cookie-urilor</h2>
            <p className="mb-4">
              Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge 
              toate cookie-urile care sunt deja pe computerul dumneavoastră și puteți seta 
              majoritatea browserelor să le împiedice să fie plasate.
            </p>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">Setări Browser</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Chrome:</strong> Setări → Confidențialitate și securitate → Cookie-uri</li>
                <li><strong>Firefox:</strong> Opțiuni → Confidențialitate și securitate</li>
                <li><strong>Safari:</strong> Preferințe → Confidențialitate</li>
                <li><strong>Edge:</strong> Setări → Cookie-uri și permisiuni site</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Actualizări Politică</h2>
            <p className="mb-4">
              Această politică de cookie-uri poate fi actualizată periodic pentru a reflecta 
              modificările în utilizarea cookie-urilor sau din alte motive operaționale, 
              legale sau de reglementare.
            </p>
            <p>
              <strong>Ultima actualizare:</strong> Decembrie 2024
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p>
              Pentru întrebări despre această politică de cookie-uri:
              <br />
              Email: privacy@epicgym.ro
              <br />
              Telefon: +40 XXX XXX XXX
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PoliticaCookies;