import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    title: "Notre migration Linux en 6 mois",
    type: "video",
    author: {
      name: "Marie Dupont",
      role: "Technicienne",
      school_name: "Lycée Carnot",
      city: "Bruay-la-Buissière"
    },
    summary: "Comment nous avons migré 98% de notre parc vers Linux et économisé 35K€/an.",
    results: {
      before: { windows_percentage: 100, budget_licenses: 18000, autonomy: 5 },
      after: { linux_percentage: 98, budget_licenses: 500, autonomy: 95, savings_per_year: 35000 }
    },
    tags: ["migration", "linux", "economies"],
    created_at: "2024-10-15T14:00:00Z",
    stats: { views: 2300, likes: 156 }
  },
  {
    id: 2,
    title: "Comment j'ai convaincu mon équipe",
    type: "text",
    author: {
      name: "Paul Legrand",
      role: "Directeur",
      school_name: "Collège Pasteur",
      city: "Paris"
    },
    summary: "Les 5 arguments qui ont fait basculer mes enseignants réticents vers NIRD.",
    results: null,
    tags: ["changement", "management"],
    created_at: "2024-11-20T10:30:00Z",
    stats: { views: 1800, likes: 89 }
  },
  {
    id: 3,
    title: "Migration avec un budget limité",
    type: "video",
    author: {
      name: "Ahmed El Fassi",
      role: "Technicien",
      school_name: "Lycée Ibn Khaldoun",
      city: "Casablanca"
    },
    summary: "Comment nous avons réussi notre transition avec seulement 3000€ de budget.",
    results: {
      before: { windows_percentage: 100, budget_licenses: 8000, autonomy: 10 },
      after: { linux_percentage: 85, budget_licenses: 200, autonomy: 70, savings_per_year: 7800 }
    },
    tags: ["budget", "economie"],
    created_at: "2024-11-05T09:15:00Z",
    stats: { views: 1450, likes: 98 }
  },
  {
    id: 4,
    title: "Le club Linux des élèves",
    type: "text",
    author: {
      name: "Claire Dubois",
      role: "Enseignante",
      school_name: "Collège Molière",
      city: "Lyon"
    },
    summary: "Comment les élèves sont devenus les ambassadeurs de NIRD dans notre établissement.",
    results: null,
    tags: ["pedagogie", "eleves"],
    created_at: "2024-10-28T11:00:00Z",
    stats: { views: 1120, likes: 76 }
  },
  {
    id: 5,
    title: "Formation rapide des enseignants",
    type: "video",
    author: {
      name: "Sophie Martin",
      role: "Formatrice",
      school_name: "Lycée Victor Hugo",
      city: "Marseille"
    },
    summary: "Programme de formation de 2 semaines qui a permis une adoption de 90% par les enseignants.",
    results: {
      before: { windows_percentage: 100, budget_licenses: 12000, autonomy: 8 },
      after: { linux_percentage: 90, budget_licenses: 400, autonomy: 85, savings_per_year: 11600 }
    },
    tags: ["formation", "enseignants"],
    created_at: "2024-11-12T15:45:00Z",
    stats: { views: 1650, likes: 112 }
  },
  {
    id: 6,
    title: "Réduction de notre empreinte carbone",
    type: "text",
    author: {
      name: "Jean Moreau",
      role: "Responsable IT",
      school_name: "Collège Rousseau",
      city: "Toulouse"
    },
    summary: "NIRD nous a permis de prolonger la vie de nos machines de 5 ans et réduire nos déchets électroniques.",
    results: null,
    tags: ["ecologie", "durabilite"],
    created_at: "2024-10-22T08:20:00Z",
    stats: { views: 980, likes: 67 }
  },
  {
    id: 7,
    title: "De Windows à Linux en milieu rural",
    type: "video",
    author: {
      name: "Pierre Blanchard",
      role: "Technicien",
      school_name: "Lycée Agricole du Bourbonnais",
      city: "Moulins"
    },
    summary: "Notre expérience de migration dans un contexte rural avec des contraintes spécifiques.",
    results: {
      before: { windows_percentage: 100, budget_licenses: 5500, autonomy: 12 },
      after: { linux_percentage: 92, budget_licenses: 150, autonomy: 88, savings_per_year: 5350 }
    },
    tags: ["rural", "migration"],
    created_at: "2024-11-08T14:10:00Z",
    stats: { views: 1340, likes: 91 }
  },
  {
    id: 8,
    title: "Collaboration internationale avec NIRD",
    type: "text",
    author: {
      name: "Fatima Zahra",
      role: "Coordinatrice",
      school_name: "École Internationale de Rabat",
      city: "Rabat"
    },
    summary: "Comment NIRD facilite nos projets éducatifs transfrontaliers avec des outils libres.",
    results: null,
    tags: ["international", "collaboration"],
    created_at: "2024-11-15T10:05:00Z",
    stats: { views: 1580, likes: 103 }
  }
];

function TestimonialCard({ testimonial, index }) {
  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num;
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-300"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'slideUp 0.6s ease-out forwards'
      }}
    >
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <span className="inline-block bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-bold text-purple-700 shadow-sm mb-2">
            {testimonial.type}
          </span>
          
          <h3 className="text-base font-bold text-white mb-1.5 leading-tight group-hover:scale-105 transition-transform duration-300">
            {testimonial.title}
          </h3>
          <p className="text-white/95 text-xs leading-relaxed line-clamp-2">
            {testimonial.summary}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Author */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-purple-100">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
            {testimonial.author.name[0]}
          </div>
          <div className="min-w-0">
            <p className="font-bold text-gray-900 truncate text-xs group-hover:text-purple-600 transition-colors">
              {testimonial.author.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {testimonial.author.role}
            </p>
          </div>
        </div>

        {/* Results */}
        {testimonial.results && (
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-lg p-3 mb-3 group-hover:shadow-md transition-shadow duration-300">
            <p className="text-xs font-bold text-gray-600 mb-2">Résultats</p>
            
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-0.5">Linux</p>
                <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {testimonial.results.after.linux_percentage}%
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-0.5">Autonomie</p>
                <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  {testimonial.results.after.autonomy}%
                </p>
              </div>
            </div>
            
            {testimonial.results.after.savings_per_year && (
              <div className="text-center pt-2 border-t border-purple-200">
                <p className="text-xs text-gray-500 mb-0.5">Économies/an</p>
                <p className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  {testimonial.results.after.savings_per_year.toLocaleString()}€
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {testimonial.tags.slice(0, 3).map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-0.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs hover:from-purple-200 hover:to-pink-200 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-purple-100">
          <div className="flex gap-3 text-xs text-gray-400">
            <span>{formatNumber(testimonial.stats.views)}</span>
            <span>{formatNumber(testimonial.stats.likes)}</span>
          </div>
          
          <button className="text-purple-600 font-bold hover:text-pink-600 transition-all duration-300 text-xs group-hover:translate-x-1">
            Lire plus
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm transform hover:scale-105
        ${active 
          ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-purple-200 hover:border-purple-300'
        }
      `}
    >
      {children}
    </button>
  );
}

export default function Testimonials() {
  const [filter, setFilter] = useState('all');

  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' || t.type === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-8 border border-purple-200 animate-fadeIn">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Témoignages
            </h1>
            <p className="text-gray-700">
              Découvrez comment d'autres établissements ont réussi leur transition vers NIRD
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 md:p-6 border border-purple-200 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
                Tous
              </FilterButton>
              <FilterButton active={filter === 'video'} onClick={() => setFilter('video')}>
                Vidéos
              </FilterButton>
              <FilterButton active={filter === 'text'} onClick={() => setFilter('text')}>
                Articles
              </FilterButton>
            </div>
            
            <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm">
              Partager mon témoignage
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
              {testimonials.length}
            </p>
            <p className="text-xs text-gray-600">Témoignages</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-1">
              {testimonials.filter(t => t.type === 'video').length}
            </p>
            <p className="text-xs text-gray-600">Vidéos</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
              {Math.round(testimonials.reduce((sum, t) => sum + t.stats.views, 0) / 1000)}k
            </p>
            <p className="text-xs text-gray-600">Vues totales</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
              {testimonials.reduce((sum, t) => sum + t.stats.likes, 0)}
            </p>
            <p className="text-xs text-gray-600">Likes totaux</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTestimonials.map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-12 text-center border border-purple-200">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600">Aucun témoignage trouvé</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}



// import { useState } from 'react';
// import testimonials from '../data/testimonials';  // ✅ Sans accolades
// import TestimonialCard from '../components/TestimonialCard';

// // ... reste du code identique

// export default function Testimonials() {
//   const [filter, setFilter] = useState('all');

//   const filteredTestimonials = testimonials.filter(t => 
//     filter === 'all' || t.type === filter
//   );

//   return (
//     <div className="space-y-6 animate-fade-in">
//       {/* Header */}
//       <div className="bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-4xl font-bold mb-3 text-slate-800">📖 Témoignages Inspirants</h2>
//         <p className="text-gray-600 text-lg">
//           Découvrez comment d'autres établissements ont réussi leur transition vers NIRD.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-2xl shadow-lg p-6">
//         <p className="text-sm font-semibold text-gray-600 mb-3">Filtrer par type</p>
//         <div className="flex flex-wrap gap-2">
//           <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
//             Tous
//           </FilterButton>
//           <FilterButton active={filter === 'video'} onClick={() => setFilter('video')}>
//             🎥 Vidéos
//           </FilterButton>
//           <FilterButton active={filter === 'text'} onClick={() => setFilter('text')}>
//             📝 Articles
//           </FilterButton>
//         </div>

//         <button className="mt-4 w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//           ➕ Partager mon témoignage
//         </button>
//       </div>

//       {/* Testimonials Grid */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {filteredTestimonials.map((t, index) => (
//           <div key={t.id} className={`stagger-${Math.min(index + 1, 5)}`}>
//             <TestimonialCard testimonial={t} />
//           </div>
//         ))}
//       </div>

//       {filteredTestimonials.length === 0 && (
//         <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
//           <div className="text-6xl mb-4">🔍</div>
//           <p className="text-gray-600 text-lg">Aucun témoignage trouvé</p>
//         </div>
//       )}
//     </div>
//   );
// }

// function FilterButton({ active, onClick, children }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         px-4 py-2 rounded-lg font-semibold transition-all duration-300
//         ${active 
//           ? 'bg-purple-600 text-white shadow-lg' 
//           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//         }
//       `}
//     >
//       {children}
//     </button>
//   );
// }
