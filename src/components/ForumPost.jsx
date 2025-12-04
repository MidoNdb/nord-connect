import { useState } from 'react';

export default function ForumPost({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  
  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return "À l'instant";
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  };

  // Couleurs selon catégorie
  const categoryConfig = {
    technique: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-700 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
      icon: "⚙️"
    },
    budget: {
      bg: "bg-green-50 dark:bg-green-900/20",
      text: "text-green-700 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
      icon: "💰"
    },
    pedagogie: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-700 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
      icon: "📚"
    },
    aide: {
      bg: "bg-orange-50 dark:bg-orange-900/20",
      text: "text-orange-700 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-800",
      icon: "🆘"
    }
  };

  const config = categoryConfig[post.category] || categoryConfig.aide;
  
  // Couleur avatar
  const avatarColors = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    pink: "bg-pink-500",
    indigo: "bg-indigo-500",
    teal: "bg-teal-500",
    cyan: "bg-cyan-500",
    amber: "bg-amber-500"
  };

  return (
    <article className="group relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 animate-fade-in">
      {/* Badge résolu */}
      {post.solved && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Résolu
        </div>
      )}

      <div className="p-6">
        {/* Header avec avatar + info auteur */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className={`w-12 h-12 rounded-xl ${avatarColors[post.author.avatar_color]} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
            {post.author.name[0]}
          </div>

          {/* Info auteur + catégorie */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {post.author.name}
              </h3>
              <span className={`px-2 py-0.5 ${config.bg} ${config.text} rounded-md text-xs font-medium border ${config.border} flex items-center gap-1`}>
                <span>{config.icon}</span>
                {post.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {post.author.school_name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatDate(post.created_at)}
              </span>
            </div>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
          {post.title}
        </h2>

        {/* Contenu */}
        <p className={`text-gray-700 dark:text-gray-300 mb-4 leading-relaxed ${!isExpanded && 'line-clamp-2'}`}>
          {post.content}
        </p>

        {post.content.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mb-4"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-all transform hover:scale-105"
            >
              #{tag}
            </span>
          ))}
          {post.tags.length > 4 && (
            <span className="px-2.5 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
              +{post.tags.length - 4}
            </span>
          )}
        </div>

        {/* Footer Stats + Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <button className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors group/stat">
              <svg className="w-4 h-4 group-hover/stat:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-medium">{post.stats.views}</span>
            </button>

            <button className="flex items-center gap-1.5 hover:text-green-600 dark:hover:text-green-400 transition-colors group/stat">
              <svg className="w-4 h-4 group-hover/stat:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-medium">{post.stats.replies}</span>
            </button>

            <button
              onClick={() => setUpvoted(!upvoted)}
              className={`flex items-center gap-1.5 transition-all group/stat ${
                upvoted
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <svg className={`w-4 h-4 group-hover/stat:scale-110 transition-transform ${upvoted ? 'fill-current' : ''}`} fill={upvoted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="font-medium">{post.stats.upvotes + (upvoted ? 1 : 0)}</span>
            </button>
          </div>

          {/* Action Button */}
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold text-sm transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            Répondre
          </button>
        </div>
      </div>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none" />
    </article>
  );
}

// export default function ForumPost({ post }) {
//   // Formater la date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffMs = now - date;
//     const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
//     if (diffHours < 1) return "il y a quelques minutes";
//     if (diffHours < 24) return `il y a ${diffHours}h`;
//     return `il y a ${Math.floor(diffHours / 24)}j`;
//   };

//   // Couleur selon catégorie
//   const categoryColors = {
//     technique: "bg-blue-100 text-blue-800",
//     budget: "bg-green-100 text-green-800",
//     pedagogie: "bg-purple-100 text-purple-800",
//     aide: "bg-orange-100 text-orange-800"
//   };

//   return (
//     <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-white hover-lift animate-fade-in">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-3">
//         <div className="flex-1">
//           <h3 className="text-xl font-bold text-slate-800 hover:text-blue-600 cursor-pointer mb-2">
//             {post.title}
//           </h3>
          
//           <div className="flex items-center gap-3 text-sm text-gray-600">
//             <span className="flex items-center gap-1">
//               👤 <strong>{post.author.name}</strong>
//             </span>
//             <span>•</span>
//             <span>🏫 {post.author.school_name}</span>
//             <span>•</span>
//             <span>{formatDate(post.created_at)}</span>
//           </div>
//         </div>

//         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
//           {post.category}
//         </span>
//       </div>

//       {/* Content */}
//       <p className="text-gray-700 mb-4 leading-relaxed">
//         {post.content}
//       </p>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {post.tags.map((tag, index) => (
//           <span 
//             key={index}
//             className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
//           >
//             #{tag}
//           </span>
//         ))}
//       </div>

//       {/* Footer Stats */}
//       <div className="flex items-center gap-6 text-sm text-gray-600 border-t pt-4">
//         <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
//           <span className="text-lg">👁️</span>
//           {post.stats.views} vues
//         </span>
//         <span className="flex items-center gap-2 hover:text-green-600 cursor-pointer transition-colors">
//           <span className="text-lg">💬</span>
//           {post.stats.replies} réponses
//         </span>
//         <span className="flex items-center gap-2 hover:text-purple-600 cursor-pointer transition-colors">
//           <span className="text-lg">👍</span>
//           {post.stats.upvotes} votes
//         </span>
        
//         <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
//           Répondre
//         </button>
//       </div>
//     </div>
//   );
// }