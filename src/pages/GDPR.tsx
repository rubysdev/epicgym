import React from 'react';
import { ArrowLeft, Shield, Eye, Edit, Trash2, Download, StopCircle } from 'lucide-react';

function GDPR() {
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
        <h1 className="text-4xl font-black mb-8">GDPR - Protecția Datelor</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Drepturile Dumneavoastră GDPR</h2>
            <p className="mb-6">
              Conform Regulamentului General privind Protecția Datelor (GDPR), aveți următoarele drepturi 
              în ceea ce privește datele personale pe care le procesăm:
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Dreptul de Acces</h3>
              </div>
              <p className="text-sm">
                Puteți solicita informații despre datele personale pe care le procesăm despre dumneavoastră, 
                inclusiv scopurile prelucrării și categoriile de destinatari.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <Edit className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Dreptul de Rectificare</h3>
              </div>
              <p className="text-sm">
                Puteți solicita corectarea datelor personale inexacte sau completarea 
                datelor incomplete pe care le deținem despre dumneavoastră.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <Trash2 className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Dreptul la Ștergere</h3>
              </div>
              <p className="text-sm">
                În anumite circumstanțe, puteți solicita ștergerea datelor personale 
                pe care le procesăm despre dumneavoastră.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <StopCircle className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Dreptul la Restricționare</h3>
              </div>
              <p className="text-sm">
                Puteți solicita restricționarea prelucrării datelor personale în 
                anumite circumstanțe specifice.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <Download className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Dreptul la Portabilitate</h3>
              </div>
              <p className="text-sm">
                Puteți solicita să primiți datele personale într-un format structurat, 
                utilizat în mod obișnuit și care poate fi citit automat.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Dreptul de Opoziție</h3>
              </div>
              <p className="text-sm">
                Puteți să vă opuneți prelucrării datelor personale în anumite situații, 
                inclusiv pentru marketing direct.
              </p>
            </div>
          </div>

          <section className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Cum să Exercitați Aceste Drepturi</h2>
            <p className="mb-4">
              Pentru a exercita oricare dintre aceste drepturi, vă rugăm să ne contactați folosind 
              informațiile de mai jos. Vom răspunde la solicitarea dumneavoastră în termen de 30 de zile.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> contact@epicgym.ro</p>
              <p><strong>Telefon:</strong> +40 723109766</p>
              <p><strong>Adresă:</strong> Str. Armatei, nr. 1, etaj 2, Complex Palia, Orăștie, Hunedoara</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Plângeri</h2>
            <p className="mb-4">
              Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă GDPR, 
              aveți dreptul să depuneți o plângere la autoritatea de supraveghere competentă:
            </p>
            <p>
              <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>
              <br />
              Website: <a href="https://www.dataprotection.ro" className="text-purple-400 hover:text-purple-300">www.dataprotection.ro</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Actualizări</h2>
            <p>
              Această pagină poate fi actualizată periodic pentru a reflecta modificările 
              în practicile noastre de protecție a datelor sau în legislația aplicabilă.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GDPR;