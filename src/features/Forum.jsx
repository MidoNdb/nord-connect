import { useState } from 'react';
import forumPosts from '../data/forumPosts';
import ForumPost from '../components/ForumPost';

export default function Forum() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // ... reste du code (filtrage, tri, stats)

  const filteredPosts = forumPosts.filter(post => {
    const matchesFilter = filter === 'all' || post.category === filter;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.stats.upvotes - a.stats.upvotes;
      case 'replies':
        return b.stats.replies - a.stats.replies;
      case 'recent':
      default:
        return new Date(b.created_at) - new Date(a.created_at);
    }
  });

  const categoryStats = {
    all: forumPosts.length,
    technique: forumPosts.filter(p => p.category === 'technique').length,
    budget: forumPosts.filter(p => p.category === 'budget').length,
    pedagogie: forumPosts.filter(p => p.category === 'pedagogie').length,
    aide: forumPosts.filter(p => p.category === 'aide').length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Minimaliste avec couleurs NIRD */}
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg border-2 border-gray-100 dark:border-slate-800 overflow-hidden">
        {/* Dégradé subtil NIRD en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="relative px-6 sm:px-8 py-8 sm:py-10">
          {/* Titre simple */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Forum Collaboratif
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl">
              Échangez avec la communauté NIRD : posez vos questions, partagez vos expériences et trouvez des solutions ensemble.
            </p>
          </div>

          {/* Stats minimalistes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCardMinimal 
              value={forumPosts.length} 
              label="Discussions" 
              color="blue"
            />
            <StatCardMinimal 
              value={forumPosts.filter(p => p.solved).length} 
              label="Résolues" 
              color="purple"
            />
            <StatCardMinimal 
              value="127" 
              label="Membres" 
              color="pink"
            />
            <StatCardMinimal 
              value={forumPosts.reduce((sum, p) => sum + p.stats.replies, 0)} 
              label="Réponses" 
              color="blue"
            />
          </div>

          {/* Bouton CTA simple */}
          <div className="mt-6">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
              Nouvelle discussion
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-800 overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une discussion..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-800">
          <div className="flex flex-wrap gap-2">
            <CategoryButtonSimple 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
              count={categoryStats.all}
            >
              Toutes
            </CategoryButtonSimple>
            <CategoryButtonSimple 
              active={filter === 'technique'} 
              onClick={() => setFilter('technique')}
              color="blue"
              count={categoryStats.technique}
            >
              Technique
            </CategoryButtonSimple>
            <CategoryButtonSimple 
              active={filter === 'budget'} 
              onClick={() => setFilter('budget')}
              color="green"
              count={categoryStats.budget}
            >
              Budget
            </CategoryButtonSimple>
            <CategoryButtonSimple 
              active={filter === 'pedagogie'} 
              onClick={() => setFilter('pedagogie')}
              color="purple"
              count={categoryStats.pedagogie}
            >
              Pédagogie
            </CategoryButtonSimple>
            <CategoryButtonSimple 
              active={filter === 'aide'} 
              onClick={() => setFilter('aide')}
              color="pink"
              count={categoryStats.aide}
            >
              Aide
            </CategoryButtonSimple>
          </div>
        </div>

        {/* Sort Options */}
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Trier par :</span>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <SortButtonSimple active={sortBy === 'recent'} onClick={() => setSortBy('recent')}>
              Récent
            </SortButtonSimple>
            <SortButtonSimple active={sortBy === 'popular'} onClick={() => setSortBy('popular')}>
              Populaire
            </SortButtonSimple>
            <SortButtonSimple active={sortBy === 'replies'} onClick={() => setSortBy('replies')}>
              Actif
            </SortButtonSimple>
          </div>
        </div>
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-blue-700 dark:text-blue-300 text-sm">
          {sortedPosts.length} résultat{sortedPosts.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {sortedPosts.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-16 text-center border border-gray-200 dark:border-slate-800">
            <div className="text-5xl mb-4 text-gray-300">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Aucune discussion
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Modifiez vos filtres ou créez une nouvelle discussion
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Réinitialiser
            </button>
          </div>
        ) : (
          sortedPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}
            >
              <ForumPost post={post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ========== COMPOSANTS MINIMALISTES ==========

function StatCardMinimal({ value, label, color }) {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all">
      <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent mb-1`}>
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}

function CategoryButtonSimple({ active, onClick, children, color = 'gray', count }) {
  const colors = {
    gray: active ? 'bg-gray-800 text-white' : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300',
    blue: active ? 'bg-blue-600 text-white' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
    green: active ? 'bg-green-600 text-white' : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
    purple: active ? 'bg-purple-600 text-white' : 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400',
    pink: active ? 'bg-pink-600 text-white' : 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400'
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-semibold text-sm
        transition-all flex items-center gap-2
        ${colors[color]}
        ${active ? 'shadow-md' : 'hover:opacity-80'}
      `}
    >
      <span>{children}</span>
      <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${active ? 'bg-white/20' : 'bg-black/10'}`}>
        {count}
      </span>
    </button>
  );
}

function SortButtonSimple({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-medium text-sm transition-all flex-1 sm:flex-none
        ${active
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
          : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
        }
      `}
    >
      {children}
    </button>
  );
}



// import { useState } from 'react';
// import forumPosts from '../data/forumPosts';  // ✅ Sans accolades
// import ForumPost from '../components/ForumPost';

// export default function Forum() {
//   const [filter, setFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredPosts = forumPosts.filter(post => {
//     const matchesFilter = filter === 'all' || post.category === filter;
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           post.content.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <div className="space-y-6 animate-fade-in">
//       {/* Header */}
//       <div className="bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-4xl font-bold mb-3 text-slate-800">💬 Forum Collaboratif</h2>
//         <p className="text-gray-600 text-lg">
//           Posez vos questions, partagez vos expériences, aidez les autres établissements.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-2xl shadow-lg p-6">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Search */}
//           <div className="flex-1">
//             <input
//               type="text"
//               placeholder="🔍 Rechercher une discussion..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex gap-2">
//             <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
//               Tous
//             </FilterButton>
//             <FilterButton active={filter === 'technique'} onClick={() => setFilter('technique')}>
//               Technique
//             </FilterButton>
//             <FilterButton active={filter === 'budget'} onClick={() => setFilter('budget')}>
//               Budget
//             </FilterButton>
//             <FilterButton active={filter === 'pedagogie'} onClick={() => setFilter('pedagogie')}>
//               Pédagogie
//             </FilterButton>
//           </div>
//         </div>

//         {/* New Post Button */}
//         <button className="mt-4 w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//           ➕ Nouvelle discussion
//         </button>
//       </div>

//       {/* Posts List */}
//       <div className="space-y-4">
//         {filteredPosts.length === 0 ? (
//           <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
//             <div className="text-6xl mb-4">🔍</div>
//             <p className="text-gray-600 text-lg">Aucune discussion trouvée</p>
//           </div>
//         ) : (
//           filteredPosts.map((post, index) => (
//             <div key={post.id} className={`stagger-${Math.min(index + 1, 5)}`}>
//               <ForumPost post={post} />
//             </div>
//           ))
//         )}
//       </div>
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
//           ? 'bg-blue-600 text-white shadow-lg' 
//           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//         }
//       `}
//     >
//       {children}
//     </button>
//   );
// }