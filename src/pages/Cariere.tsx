import React from 'react';
import { ArrowLeft, Users, Award, Clock, Heart, Briefcase, GraduationCap } from 'lucide-react';

function Cariere() {
  const jobOpenings = [
    {
      title: "Instructor Fitness",
      type: "Full-time",
      location: "Orăștie",
      description: "Căutăm un instructor pasionat pentru a conduce clasele de grup și a ajuta membrii să-și atingă obiectivele.",
      requirements: [
        "Certificare în fitness/aerobic",
        "Experiență minimum 2 ani",
        "Abilități de comunicare excelente",
        "Pasiune pentru fitness și wellness"
      ]
    },
    {
      title: "Personal Trainer",
      type: "Part-time/Full-time",
      location: "Orăștie",
      description: "Antrenor personal pentru sesiuni individuale și programe personalizate de antrenament.",
      requirements: [
        "Certificare în antrenament personal",
        "Cunoștințe de nutriție",
        "Experiență cu diverse tipuri de clienți",
        "Flexibilitate în program"
      ]
    },
    {
      title: "Receptioner",
      type: "Full-time",
      location: "Orăștie",
      description: "Prima impresie pentru membrii noștri - gestionarea recepției și servicii pentru clienți.",
      requirements: [
        "Experiență în customer service",
        "Abilități de comunicare",
        "Cunoștințe de bază IT",
        "Disponibilitate pentru ture"
      ]
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
        <h1 className="text-4xl font-black mb-8 text-center">Cariere la EPIC GYM</h1>
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Alătură-te echipei EPIC GYM și fă parte din cea mai dinamică comunitate de fitness din Orăștie. 
            Căutăm oameni pasionați care să ne ajute să inspirăm și să transformăm viețile membrilor noștri.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">De ce să lucrezi cu noi?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Pasiune pentru Fitness</h3>
              <p className="text-gray-300">
                Lucrezi într-un mediu unde pasiunea pentru fitness și wellness este împărtășită de toată echipa.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dezvoltare Profesională</h3>
              <p className="text-gray-300">
                Oferim oportunități de formare continuă și dezvoltare a competențelor profesionale.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Echipă Unită</h3>
              <p className="text-gray-300">
                Faci parte dintr-o echipă solidară, unde fiecare membru este apreciat și susținut.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Beneficii Atractive</h3>
              <p className="text-gray-300">
                Pachet salarial competitiv, abonament gratuit la sală și alte beneficii pentru angajați.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Flexibilitate</h3>
              <p className="text-gray-300">
                Oferim flexibilitate în program pentru a menține echilibrul între viața profesională și personală.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
              <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mediu Modern</h3>
              <p className="text-gray-300">
                Lucrezi cu echipamente de ultimă generație într-un spațiu modern și inspirațional.
              </p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Poziții Disponibile</h2>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="px-3 py-1 bg-purple-600 text-white rounded-full">{job.type}</span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">{job.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                    Aplică Acum
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{job.description}</p>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Cerințe:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
          <h2 className="text-3xl font-bold text-center mb-8">Procesul de Aplicare</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Aplică Online</h3>
              <p className="text-gray-300">
                Trimite CV-ul și scrisoarea de intenție la careers@epicgym.ro
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Interviu</h3>
              <p className="text-gray-300">
                Participă la un interviu cu echipa noastră de management
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bun venit!</h3>
              <p className="text-gray-300">
                Alătură-te echipei EPIC GYM și începe o carieră de succes
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Careers */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">Întrebări despre Cariere?</h2>
          <p className="text-gray-300 mb-6">
            Contactează-ne pentru mai multe informații despre oportunitățile de carieră la EPIC GYM.
          </p>
          <div className="space-y-2">
            <p className="text-gray-300">
              <strong>Email:</strong> careers@epicgym.ro
            </p>
            <p className="text-gray-300">
              <strong>Telefon:</strong> +40 XXX XXX XXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cariere;