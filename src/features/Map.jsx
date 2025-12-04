import { useState } from 'react';

const schools = [
  {
    id: 1,
    name: "Lycée Carnot",
    city: "Bruay-la-Buissière",
    region: "Hauts-de-France",
    country: "France",
    type: "lycee",
    students: 800,
    indicators: {
      autonomy: 95,
      sustainability: 88,
      linux_percentage: 98
    },
    stats: {
      total_computers: 150,
      linux_computers: 147,
      savings_per_year: 35000
    },
    nird_status: "expert",
    member_since: "2023-09-01"
  },
  {
    id: 2,
    name: "Lycée Astérix",
    city: "Nouakchott",
    region: "Nouakchott",
    country: "Mauritanie",
    type: "lycee",
    students: 800,
    indicators: {
      autonomy: 35,
      sustainability: 40,
      linux_percentage: 27
    },
    stats: {
      total_computers: 150,
      linux_computers: 40,
      savings_per_year: 8000
    },
    nird_status: "intermediaire",
    member_since: "2024-11-01"
  },
  {
    id: 3,
    name: "Collège Voltaire",
    city: "Lille",
    region: "Hauts-de-France",
    country: "France",
    type: "college",
    students: 400,
    indicators: {
      autonomy: 62,
      sustainability: 55,
      linux_percentage: 60
    },
    stats: {
      total_computers: 80,
      linux_computers: 48,
      savings_per_year: 12000
    },
    nird_status: "avance",
    member_since: "2024-03-15"
  },
  {
    id: 4,
    name: "École Pasteur",
    city: "Paris",
    region: "Île-de-France",
    country: "France",
    type: "primaire",
    students: 200,
    indicators: {
      autonomy: 45,
      sustainability: 60,
      linux_percentage: 50
    },
    stats: {
      total_computers: 30,
      linux_computers: 15,
      savings_per_year: 3000
    },
    nird_status: "intermediaire",
    member_since: "2024-06-01"
  },
  {
    id: 5,
    name: "Lycée Victor Hugo",
    city: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    country: "France",
    type: "lycee",
    students: 1200,
    indicators: {
      autonomy: 78,
      sustainability: 72,
      linux_percentage: 75
    },
    stats: {
      total_computers: 200,
      linux_computers: 150,
      savings_per_year: 28000
    },
    nird_status: "avance",
    member_since: "2023-11-20"
  },
  {
    id: 6,
    name: "Collège Jean Moulin",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    type: "college",
    students: 600,
    indicators: {
      autonomy: 85,
      sustainability: 80,
      linux_percentage: 90
    },
    stats: {
      total_computers: 120,
      linux_computers: 108,
      savings_per_year: 22000
    },
    nird_status: "expert",
    member_since: "2023-05-12"
  }
];

export default function MapPage() {
  const [filter, setFilter] = useState('all');

  const filteredSchools = schools.filter(school => 
    filter === 'all' || school.nird_status === filter
  );

  const statusConfig = {
    expert: {
      gradient: 'from-purple-600 to-purple-700',
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      text: 'text-purple-700',
      label: 'Expert'
    },
    avance: {
      gradient: 'from-blue-600 to-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-700',
      label: 'Avancé'
    },
    intermediaire: {
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      text: 'text-orange-700',
      label: 'Intermédiaire'
    },
    debutant: {
      gradient: 'from-gray-500 to-gray-600',
      bg: 'bg-gray-50',
      border: 'border-gray-300',
      text: 'text-gray-700',
      label: 'Débutant'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Hero Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
          <div className="space-y-3 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Carte des Établissements NIRD
            </h1>
            <p className="text-base text-gray-600">
              Découvrez les établissements engagés pour un numérique responsable et durable
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard 
              number={schools.length}
              label="Établissements"
            />
            <StatCard 
              number={schools.filter(s => s.nird_status === 'expert').length}
              label="Experts"
            />
            <StatCard 
              number={schools.reduce((acc, s) => acc + s.students, 0).toLocaleString()}
              label="Élèves"
            />
            <StatCard 
              number={Math.round(schools.reduce((acc, s) => acc + s.indicators.linux_percentage, 0) / schools.length) + '%'}
              label="Linux moyen"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <h3 className="text-base font-bold text-gray-800">Filtrer par niveau</h3>
            <span className="text-sm text-gray-500">{filteredSchools.length} résultat(s)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterChip 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
              label="Tous"
              count={schools.length}
            />
            {Object.entries(statusConfig).map(([key, config]) => (
              <FilterChip
                key={key}
                active={filter === key}
                onClick={() => setFilter(key)}
                label={config.label}
                count={schools.filter(s => s.nird_status === key).length}
              />
            ))}
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSchools.map((school, index) => {
            const config = statusConfig[school.nird_status];
            return (
              <div 
                key={school.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${config.gradient} px-4 py-3`}>
                  <span className={`inline-flex px-3 py-1 rounded-lg text-xs font-semibold bg-white/90 ${config.text}`}>
                    {config.label}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-3">
                  {/* School Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {school.name}
                    </h3>
                    <div className="text-sm text-gray-600 mb-1">
                      {school.city}, {school.region}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="font-semibold">{school.type}</span>
                      <span>•</span>
                      <span>{school.students} élèves</span>
                    </div>
                  </div>

                  {/* Indicators */}
                  <div className="space-y-2">
                    <ProgressBar 
                      label="Linux"
                      value={school.indicators.linux_percentage}
                      color="bg-blue-600"
                    />
                    <ProgressBar 
                      label="Autonomie"
                      value={school.indicators.autonomy}
                      color="bg-purple-600"
                    />
                    <ProgressBar 
                      label="Durabilité"
                      value={school.indicators.sustainability}
                      color="bg-green-600"
                    />
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`${config.bg} ${config.border} border rounded-lg p-2`}>
                      <div className="text-xs text-gray-600">Ordinateurs</div>
                      <div className={`text-xl font-bold ${config.text}`}>
                        {school.stats.total_computers}
                      </div>
                      <div className="text-xs text-gray-500">
                        {school.stats.linux_computers} Linux
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-300 rounded-lg p-2">
                      <div className="text-xs text-gray-600">Économies</div>
                      <div className="text-xl font-bold text-green-700">
                        {(school.stats.savings_per_year / 1000).toFixed(0)}k€
                      </div>
                      <div className="text-xs text-gray-500">par an</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-1">
                    <button className={`flex-1 bg-gradient-to-r ${config.gradient} text-white px-3 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all`}>
                      Voir le profil
                    </button>
                    <button className={`px-3 py-2 ${config.border} border-2 ${config.text} rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors`}>
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200">
      <div className="text-2xl font-bold text-gray-900">{number}</div>
      <div className="text-xs text-gray-600 font-medium mt-0.5">{label}</div>
    </div>
  );
}

function FilterChip({ active, onClick, label, count }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg text-sm font-semibold transition-all
        ${active 
          ? 'bg-purple-600 text-white shadow-md' 
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }
      `}
    >
      <span className="flex items-center gap-2">
        {label}
        <span className={`
          text-xs px-1.5 py-0.5 rounded-full
          ${active ? 'bg-white/20' : 'bg-gray-100'}
        `}>
          {count}
        </span>
      </span>
    </button>
  );
}

function ProgressBar({ label, value, color }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-bold text-gray-900">{value}%</span>
      </div>
      <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`${color} h-1.5 rounded-full transition-all duration-1000`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}


// import { useState } from 'react';  git config --global user.name MidoNdb

// const schools = [
//   {
//     id: 1,
//     name: "Lycée Carnot",
//     city: "Bruay-la-Buissière",
//     region: "Hauts-de-France",
//     country: "France",
//     type: "lycee",
//     students: 800,
//     indicators: {
//       autonomy: 95,
//       sustainability: 88,
//       linux_percentage: 98
//     },
//     stats: {
//       total_computers: 150,
//       linux_computers: 147,
//       savings_per_year: 35000
//     },
//     nird_status: "expert",
//     member_since: "2023-09-01"
//   },
//   {
//     id: 2,
//     name: "Lycée Astérix",
//     city: "Nouakchott",
//     region: "Nouakchott",
//     country: "Mauritanie",
//     type: "lycee",
//     students: 800,
//     indicators: {
//       autonomy: 35,
//       sustainability: 40,
//       linux_percentage: 27
//     },
//     stats: {
//       total_computers: 150,
//       linux_computers: 40,
//       savings_per_year: 8000
//     },
//     nird_status: "intermediaire",
//     member_since: "2024-11-01"
//   },
//   {
//     id: 3,
//     name: "Collège Voltaire",
//     city: "Lille",
//     region: "Hauts-de-France",
//     country: "France",
//     type: "college",
//     students: 400,
//     indicators: {
//       autonomy: 62,
//       sustainability: 55,
//       linux_percentage: 60
//     },
//     stats: {
//       total_computers: 80,
//       linux_computers: 48,
//       savings_per_year: 12000
//     },
//     nird_status: "avance",
//     member_since: "2024-03-15"
//   },
//   {
//     id: 4,
//     name: "École Pasteur",
//     city: "Paris",
//     region: "Île-de-France",
//     country: "France",
//     type: "primaire",
//     students: 200,
//     indicators: {
//       autonomy: 45,
//       sustainability: 60,
//       linux_percentage: 50
//     },
//     stats: {
//       total_computers: 30,
//       linux_computers: 15,
//       savings_per_year: 3000
//     },
//     nird_status: "intermediaire",
//     member_since: "2024-06-01"
//   },
//   {
//     id: 5,
//     name: "Lycée Victor Hugo",
//     city: "Marseille",
//     region: "Provence-Alpes-Côte d'Azur",
//     country: "France",
//     type: "lycee",
//     students: 1200,
//     indicators: {
//       autonomy: 78,
//       sustainability: 72,
//       linux_percentage: 75
//     },
//     stats: {
//       total_computers: 200,
//       linux_computers: 150,
//       savings_per_year: 28000
//     },
//     nird_status: "avance",
//     member_since: "2023-11-20"
//   },
//   {
//     id: 6,
//     name: "Collège Jean Moulin",
//     city: "Lyon",
//     region: "Auvergne-Rhône-Alpes",
//     country: "France",
//     type: "college",
//     students: 600,
//     indicators: {
//       autonomy: 85,
//       sustainability: 80,
//       linux_percentage: 90
//     },
//     stats: {
//       total_computers: 120,
//       linux_computers: 108,
//       savings_per_year: 22000
//     },
//     nird_status: "expert",
//     member_since: "2023-05-12"
//   }
// ];

// export default function MapPage() {
//   const [filter, setFilter] = useState('all');
//   const [selectedSchool, setSelectedSchool] = useState(null);

//   const filteredSchools = schools.filter(school => 
//     filter === 'all' || school.nird_status === filter
//   );

//   const statusConfig = {
//     expert: {
//       gradient: 'from-purple-500 via-pink-500 to-rose-500',
//       bg: 'bg-purple-50',
//       border: 'border-purple-200',
//       text: 'text-purple-700',
//       label: 'Expert',
//       icon: '⭐'
//     },
//     avance: {
//       gradient: 'from-blue-500 via-cyan-500 to-teal-500',
//       bg: 'bg-blue-50',
//       border: 'border-blue-200',
//       text: 'text-blue-700',
//       label: 'Avancé',
//       icon: '🚀'
//     },
//     intermediaire: {
//       gradient: 'from-amber-400 via-orange-500 to-red-500',
//       bg: 'bg-orange-50',
//       border: 'border-orange-200',
//       text: 'text-orange-700',
//       label: 'Intermédiaire',
//       icon: '📈'
//     },
//     debutant: {
//       gradient: 'from-emerald-400 via-green-500 to-teal-500',
//       bg: 'bg-green-50',
//       border: 'border-green-200',
//       text: 'text-green-700',
//       label: 'Débutant',
//       icon: '🌱'
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Hero Header */}
//         <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-purple-100">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10"></div>
//           <div className="relative p-8 md:p-12">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//               <div className="space-y-3">
//                 <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
//                   Carte des Établissements NIRD
//                 </h1>
//                 <p className="text-lg text-gray-600 max-w-2xl">
//                   Découvrez les établissements engagés pour un numérique responsable et durable
//                 </p>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//               <StatCard 
//                 icon={
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                 }
//                 number={schools.length}
//                 label="Établissements"
//                 gradient="from-purple-500 to-pink-500"
//               />
//               <StatCard 
//                 icon={<span className="text-2xl">⭐</span>}
//                 number={schools.filter(s => s.nird_status === 'expert').length}
//                 label="Experts"
//                 gradient="from-pink-500 to-rose-500"
//               />
//               <StatCard 
//                 icon={
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 }
//                 number={schools.reduce((acc, s) => acc + s.students, 0).toLocaleString()}
//                 label="Élèves"
//                 gradient="from-blue-500 to-cyan-500"
//               />
//               <StatCard 
//                 icon={<span className="text-2xl">🐧</span>}
//                 number={Math.round(schools.reduce((acc, s) => acc + s.indicators.linux_percentage, 0) / schools.length) + '%'}
//                 label="Linux moyen"
//                 gradient="from-cyan-500 to-teal-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//             <h3 className="text-lg font-bold text-gray-800">Filtrer par niveau</h3>
//             <span className="text-sm text-gray-500">{filteredSchools.length} résultat(s)</span>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             <FilterChip 
//               active={filter === 'all'} 
//               onClick={() => setFilter('all')}
//               label="Tous"
//               count={schools.length}
//             />
//             {Object.entries(statusConfig).map(([key, config]) => (
//               <FilterChip
//                 key={key}
//                 active={filter === key}
//                 onClick={() => setFilter(key)}
//                 label={`${config.icon} ${config.label}`}
//                 count={schools.filter(s => s.nird_status === key).length}
//                 gradient={config.gradient}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Schools Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSchools.map((school, index) => {
//             const config = statusConfig[school.nird_status];
//             return (
//               <div 
//                 key={school.id}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 {/* Card Header */}
//                 <div className={`relative h-32 bg-gradient-to-br ${config.gradient} p-6`}>
//                   <div className="absolute inset-0 bg-black/5"></div>
//                   <div className="relative flex justify-between items-start">
//                     <div>
//                       <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur ${config.text}`}>
//                         {config.icon} {config.label}
//                       </span>
//                     </div>
//                     <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-6 space-y-4">
//                   {/* School Info */}
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
//                       {school.name}
//                     </h3>
//                     <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       {school.city}, {school.region}
//                     </div>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <span className="flex items-center gap-1">
//                         <span className="font-semibold">{school.type}</span>
//                       </span>
//                       <span>•</span>
//                       <span className="flex items-center gap-1">
//                         {school.students} élèves
//                       </span>
//                     </div>
//                   </div>

//                   {/* Indicators */}
//                   <div className="space-y-3">
//                     <ProgressBar 
//                       label="Linux"
//                       value={school.indicators.linux_percentage}
//                       icon="🐧"
//                       color="bg-gradient-to-r from-blue-500 to-cyan-500"
//                     />
//                     <ProgressBar 
//                       label="Autonomie"
//                       value={school.indicators.autonomy}
//                       icon="🎯"
//                       color="bg-gradient-to-r from-purple-500 to-pink-500"
//                     />
//                     <ProgressBar 
//                       label="Durabilité"
//                       value={school.indicators.sustainability}
//                       icon="♻️"
//                       color="bg-gradient-to-r from-emerald-500 to-teal-500"
//                     />
//                   </div>

//                   {/* Stats Cards */}
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className={`${config.bg} ${config.border} border rounded-xl p-3`}>
//                       <div className="text-xs text-gray-600 mb-1">Ordinateurs</div>
//                       <div className={`text-2xl font-black ${config.text}`}>
//                         {school.stats.total_computers}
//                       </div>
//                       <div className="text-xs text-gray-500 mt-1">
//                         {school.stats.linux_computers} Linux
//                       </div>
//                     </div>
//                     <div className="bg-green-50 border border-green-200 rounded-xl p-3">
//                       <div className="text-xs text-gray-600 mb-1">Économies</div>
//                       <div className="text-2xl font-black text-green-600">
//                         {(school.stats.savings_per_year / 1000).toFixed(0)}k€
//                       </div>
//                       <div className="text-xs text-gray-500 mt-1">par an</div>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex gap-2 pt-2">
//                     <button className={`flex-1 bg-gradient-to-r ${config.gradient} text-white px-4 py-2.5 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
//                       Voir le profil
//                     </button>
//                     <button className={`px-4 py-2.5 ${config.border} border-2 ${config.text} rounded-xl font-semibold hover:bg-gray-50 transition-colors`}>
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ icon, number, label, gradient }) {
//   return (
//     <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-shadow">
//       <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white mb-3 transform hover:rotate-6 transition-transform`}>
//         {icon}
//       </div>
//       <div className="text-3xl font-black text-gray-900">{number}</div>
//       <div className="text-sm text-gray-600 font-medium">{label}</div>
//     </div>
//   );
// }

// function FilterChip({ active, onClick, label, count, gradient }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         group relative px-5 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105
//         ${active 
//           ? `bg-gradient-to-r ${gradient || 'from-purple-500 to-pink-500'} text-white shadow-lg` 
//           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//         }
//       `}
//     >
//       <span className="flex items-center gap-2">
//         {label}
//         <span className={`
//           text-xs px-2 py-0.5 rounded-full
//           ${active ? 'bg-white/20' : 'bg-gray-200'}
//         `}>
//           {count}
//         </span>
//       </span>
//     </button>
//   );
// }

// function ProgressBar({ label, value, icon, color }) {
//   return (
//     <div className="space-y-1.5">
//       <div className="flex items-center justify-between text-sm">
//         <span className="flex items-center gap-1.5 font-semibold text-gray-700">
//           <span>{icon}</span>
//           <span>{label}</span>
//         </span>
//         <span className="font-black text-gray-900">{value}%</span>
//       </div>
//       <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
//         <div 
//           className={`absolute inset-y-0 left-0 ${color} rounded-full transition-all duration-1000 ease-out`}
//           style={{ width: `${value}%` }}
//         >
//           <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
