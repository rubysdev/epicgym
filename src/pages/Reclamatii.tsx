import React, { useState } from 'react';
import { ArrowLeft, AlertCircle, FileText, Clock, CheckCircle, Send } from 'lucide-react';

function Reclamatii() {
  const [complaintForm, setComplaintForm] = useState({
    name: '',
    email: '',
    phone: '',
    membershipNumber: '',
    complaintType: '',
    description: '',
    dateIncident: '',
    desiredResolution: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Complaint submitted:', complaintForm);
    alert('Reclamația a fost înregistrată. Veți primi un răspuns în maximum 15 zile lucrătoare.');
    setComplaintForm({
      name: '', email: '', phone: '', membershipNumber: '',
      complaintType: '', description: '', dateIncident: '', desiredResolution: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setComplaintForm({
      ...complaintForm,
      [e.target.name]: e.target.value
    });
  };

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
        <h1 className="text-4xl font-black mb-8 text-center">Soluționarea Reclamațiilor</h1>
        
        {/* Info Section */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-12">
          <div className="flex items-start mb-6">
            <AlertCircle className="w-8 h-8 text-purple-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Drepturile Dumneavoastră ca Consumator</h2>
              <p className="text-gray-300 mb-4">
                Conform legislației române privind protecția consumatorilor, aveți dreptul să depuneți 
                o reclamație și să primiți un răspuns în termen de maximum 15 zile lucrătoare.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <FileText className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Depunere Reclamație</h3>
              <p className="text-gray-300 text-sm">
                Completați formularul de mai jos cu toate detaliile necesare
              </p>
            </div>
            
            <div className="text-center">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Procesare</h3>
              <p className="text-gray-300 text-sm">
                Analizăm reclamația în maximum 15 zile lucrătoare
              </p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Rezolvare</h3>
              <p className="text-gray-300 text-sm">
                Vă comunicăm soluția și implementăm măsurile necesare
              </p>
            </div>
          </div>
        </div>

        {/* Complaint Form */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Formular de Reclamație</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nume și Prenume *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={complaintForm.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={complaintForm.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={complaintForm.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
              
              <div>
                <label htmlFor="membershipNumber" className="block text-sm font-medium text-gray-300 mb-2">
                  Număr Abonament (dacă aplicabil)
                </label>
                <input
                  type="text"
                  id="membershipNumber"
                  name="membershipNumber"
                  value={complaintForm.membershipNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="complaintType" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipul Reclamației *
                </label>
                <select
                  id="complaintType"
                  name="complaintType"
                  required
                  value={complaintForm.complaintType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                >
                  <option value="">Selectează tipul reclamației</option>
                  <option value="servicii">Calitatea serviciilor</option>
                  <option value="echipamente">Probleme cu echipamentele</option>
                  <option value="personal">Comportamentul personalului</option>
                  <option value="facturare">Probleme de facturare</option>
                  <option value="facilitati">Starea facilităților</option>
                  <option value="program">Program și accesibilitate</option>
                  <option value="altele">Altele</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="dateIncident" className="block text-sm font-medium text-gray-300 mb-2">
                  Data Incidentului
                </label>
                <input
                  type="date"
                  id="dateIncident"
                  name="dateIncident"
                  value={complaintForm.dateIncident}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Descrierea Detaliată a Problemei *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={complaintForm.description}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white resize-none"
                placeholder="Descrieți în detaliu problema întâmpinată, când s-a întâmplat și orice alte informații relevante..."
              />
            </div>

            <div>
              <label htmlFor="desiredResolution" className="block text-sm font-medium text-gray-300 mb-2">
                Soluția Dorită
              </label>
              <textarea
                id="desiredResolution"
                name="desiredResolution"
                rows={3}
                value={complaintForm.desiredResolution}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white resize-none"
                placeholder="Cum ați dori să fie rezolvată această problemă?"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              Trimite Reclamația
            </button>
          </form>
        </div>

        {/* Alternative Resolution Methods */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Alte Modalități de Soluționare</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">ANPC - Autoritatea Națională pentru Protecția Consumatorilor</h3>
              <p className="text-gray-300 mb-2">
                Dacă nu sunteți mulțumit de răspunsul nostru, puteți depune o plângere la ANPC:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Website: <a href="https://anpc.ro" className="text-purple-400 hover:text-purple-300">www.anpc.ro</a></li>
                <li>Telefon: 021.9551</li>
                <li>Comisariatul Județean Hunedoara: Deva, Str. 22 Decembrie, nr. 37A</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Platforma ODR (Online Dispute Resolution)</h3>
              <p className="text-gray-300 mb-2">
                Pentru soluționarea online a litigiilor:
              </p>
              <p className="text-gray-300">
                <a href="https://ec.europa.eu/consumers/odr/" className="text-purple-400 hover:text-purple-300">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Medierea Conflictelor</h3>
              <p className="text-gray-300">
                Suntem deschiși la soluționarea amiabilă a conflictelor prin mediere, 
                înainte de a recurge la proceduri legale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reclamatii;