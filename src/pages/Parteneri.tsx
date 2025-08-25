import React from 'react';
import { ArrowLeft, Handshake, Target, Users, Award, Mail, Phone } from 'lucide-react';

function Parteneri() {
  const partnershipTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parteneriate Corporate",
      description: "Oferim pachete speciale pentru angajații companiilor partenere, incluzând reduceri la abonamente și programe de wellness corporativ.",
      benefits: [
        "Reduceri substanțiale pentru angajați",
        "Programe de team building",
        "Sesiuni de wellness la birou",
        "Rapoarte de progres pentru HR"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Sponsorizări Sportive",
      description: "Susținem atleții și echipele sportive locale prin sponsorizări și parteneriate strategice.",
      benefits: [
        "Acces gratuit la facilități",
        "Antrenament specializat",
        "Suport nutrițional",
        "Promovare comună"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Colaborări cu Profesioniștii din Sănătate",
      description: "Lucrăm cu medici, fizioterapeuți și nutriționiști pentru a oferi servicii complete de wellness.",
      benefits: [
        "Referințe reciproce",
        "Programe de recuperare",
        "Consultații specializate",
        "Educație continuă"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "Clinica MedLife Orăștie",
      type: "Partener Medical",
      description: "Colaborare pentru servicii de evaluare medicală și programe de recuperare."
    },
    {
      name: "Primăria Orăștie",
      type: "Partener Comunitar",
      description: "Susținerea evenimentelor sportive locale și promovarea unui stil de viață sănătos."
    },
    {
      name: "Universitatea din Hunedoara",
      type: "Partener Educațional",
      description: "Programe speciale pentru studenți și cercetare în domeniul fitness-ului."
    }
  ];

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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black mb-8 text-center">Parteneri</h1>
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            La EPIC GYM credem în puterea colaborării. Căutăm parteneri care împărtășesc viziunea noastră 
            de a promova un stil de viață sănătos și de a construi o comunitate mai puternică în Orăștie.
          </p>
          <div className="flex justify-center">
            <Handshake className="w-16 h-16 text-purple-400" />
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tipuri de Parteneriate</h2>
          
          <div className="space-y-8">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex items-start mb-6">
                  <div className="text-purple-400 mr-4 mt-1">
                    {partnership.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{partnership.title}</h3>
                    <p className="text-gray-300 mb-6">{partnership.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Beneficii:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {partnership.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Partenerii Noștri Actuali</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-4">
                  {partner.type}
                </span>
                <p className="text-gray-300">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">De ce să devii partenerul nostru?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Pentru Afacerea Ta</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Acces la o comunitate activă și angajată
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Oportunități de marketing și promovare
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Networking cu alte afaceri locale
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Asocierea cu o marcă de încredere
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Pentru Comunitate</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Promovarea unui stil de viață sănătos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Susținerea sportului local
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crearea de oportunități pentru tineri
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dezvoltarea economiei locale
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Become a Partner */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Cum devii partenerul nostru?</h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contactează-ne</h3>
              <p className="text-gray-300 text-sm">
                Trimite-ne un email cu propunerea ta de parteneriat
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Discuție</h3>
              <p className="text-gray-300 text-sm">
                Programăm o întâlnire pentru a discuta detaliile
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Planificare</h3>
              <p className="text-gray-300 text-sm">
                Dezvoltăm împreună strategia de colaborare
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lansare</h3>
              <p className="text-gray-300 text-sm">
                Implementăm parteneriatul și începem colaborarea
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Partnerships */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Hai să colaborăm!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ești interesat să devii partenerul nostru? Contactează-ne și să discutăm 
            cum putem lucra împreună pentru a face diferența în comunitatea din Orăștie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:partnerships@epicgym.ro"
              className="flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              partnerships@epicgym.ro
            </a>
            
            <a 
              href="tel:+40XXXXXXXXX"
              className="flex items-center px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              +40 XXX XXX XXX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parteneri;