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
              1. Cine suntem

Operatorul datelor tale este ONX FITNESS SRL, CUI 51672421, sediu str. Principala, nr. 297, Romos, Hunedoara.
Website: www.epicgym.ro
 | Email: contact@epicgym.ro

2. Ce date colectăm

Date de identificare: nume, prenume, CNP (unde este necesar)

Date de contact: telefon, email

Date pentru abonamente: plăți, istoricul serviciilor

Date tehnice: IP, cookie-uri, acces în aplicație

Imagini video (CCTV) în incinta sălilor pentru siguranță

Opțional: date biometrice (dacă folosești autentificare prin amprentă)

3. Cum folosim datele

Crearea și administrarea contului tău

Facturare și procesarea plăților

Accesul în sală și în aplicația Epic Gym

Trimiterea notificărilor și ofertelor (cu acordul tău)

Siguranță și prevenirea fraudelor

Nu vindem datele tale. Le partajăm doar cu furnizori de servicii (ex. plăți online, software) conform legii.

4. Cookie-uri

Folosim cookie-uri pentru funcționalitatea site-ului și statistici. Poți afla mai multe în Politica de Cookie-uri
.

5. Drepturile tale

Ai dreptul să:

accesezi, corectezi sau ștergi datele

îți retragi consimțământul

soliciți portabilitatea datelor

depui plângere la ANSPDCP

Pentru exercitarea drepturilor, scrie-ne la contact@epicgym.ro
.

6. Securitate

Folosim măsuri tehnice și organizatorice pentru protejarea datelor. Accesul la săli se face prin sisteme sigure (card, QR, RFID, sau biometrie unde e cazul).

7. CCTV

În sălile noastre există camere video pentru siguranța clienților și a personalului.

8. Actualizări

Politica poate fi modificată. Versiunea actualizată va fi publicată pe www.epicgym.ro
.
            </p>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
            <p>
              Pentru exercitarea drepturilor sau întrebări despre această politică:
              <br />
              Email: contact@epicgym.ro
              <br />
              
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