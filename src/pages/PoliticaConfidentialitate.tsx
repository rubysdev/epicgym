import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PoliticaConfidentialitate() {
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
        <h1 className="text-4xl font-black mb-8">Politica de Confidențialitate</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Informații Generale</h2>
            <p className="mb-4">
              EPIC GYM respectă confidențialitatea datelor personale și se angajează să protejeze 
              informațiile pe care ni le furnizați. Această politică explică cum colectăm, 
              utilizăm și protejăm datele dumneavoastră personale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Date Colectate</h2>
            <p className="mb-4">Colectăm următoarele tipuri de date personale:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informații de identificare (nume, prenume, CNP)</li>
              <li>Date de contact (adresă, telefon, email)</li>
              <li>Informații medicale relevante pentru activitatea fizică</li>
              <li>Date despre utilizarea serviciilor noastre</li>
              <li>Imagini din camerele de supraveghere (pentru securitate)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Scopul Prelucrării</h2>
            <p className="mb-4">Utilizăm datele personale pentru:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Furnizarea serviciilor de fitness</li>
              <li>Gestionarea abonamentelor și plăților</li>
              <li>Comunicarea cu membrii</li>
              <li>Îmbunătățirea serviciilor oferite</li>
              <li>Respectarea obligațiilor legale</li>
              <li>Marketing direct (cu acordul dumneavoastră)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Partajarea Datelor</h2>
            <p className="mb-4">
              Nu vindem, închiriem sau partajăm datele personale cu terți, cu excepția:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Furnizorilor de servicii care ne ajută în activitate</li>
              <li>Autorităților competente, când legea o impune</li>
              <li>În cazul unei fuziuni sau achiziții</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Securitatea Datelor</h2>
            <p className="mb-4">
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja 
              datele personale împotriva accesului neautorizat, modificării, divulgării 
              sau distrugerii.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Drepturile Dumneavoastră</h2>
            <p className="mb-4">Aveți următoarele drepturi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dreptul de acces la datele personale</li>
              <li>Dreptul de rectificare</li>
              <li>Dreptul la ștergerea datelor</li>
              <li>Dreptul la restricționarea prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul de opoziție</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Perioada de Păstrare</h2>
            <p>
              Păstrăm datele personale doar pentru perioada necesară îndeplinirii 
              scopurilor pentru care au fost colectate sau conform obligațiilor legale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
            <p>
              Pentru exercitarea drepturilor sau întrebări despre această politică:
              <br />
              Email: privacy@epicgym.ro
              <br />
              Telefon: +40 XXX XXX XXX
              <br />
              Adresă: Str. Armatei, nr. 1, etaj 2, Complex Palia, Orăștie, Hunedoara
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PoliticaConfidentialitate;