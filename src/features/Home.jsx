export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Hero Section Moderne */}
      <section className="relative bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="relative px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">
                Plateforme collaborative NIRD
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-900 dark:text-white">Bienvenue sur </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                NIRD Connect
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8">
              Rejoignez la communauté des établissements engagés dans le 
              <span className="font-semibold text-gray-900 dark:text-white"> Numérique Inclusif, Responsable et Durable</span>. 
              Partagez vos expériences, trouvez des solutions et participez à la transition numérique éducative.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                Démarrer
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <button className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border-2 border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                En savoir plus
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Modernes - RESPONSIVE FIXÉ */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <StatCardModern 
          number="1,285" 
          label="Établissements" 
          color="blue"
          trend="+12%"
        />
        <StatCardModern 
          number="85,420" 
          label="Ordinateurs" 
          color="green"
          trend="+8%"
        />
        <StatCardModern 
          number="12.4M€" 
          label="Économies" 
          color="purple"
          trend="+15%"
        />
        <StatCardModern 
          number="1,230t" 
          label="CO₂ évités" 
          color="pink"
          trend="+10%"
        />
      </section>

      {/* Features Grid Moderne */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <FeatureCardModern 
          title="Forum Collaboratif"
          description="Échangez avec la communauté, posez vos questions et partagez vos solutions."
          link="Accéder"
          color="blue"
        />

        <FeatureCardModern 
          title="Carte Interactive"
          description="Explorez les établissements NIRD et trouvez des mentors près de chez vous."
          link="Découvrir"
          color="purple"
        />

        <FeatureCardModern 
          title="Témoignages"
          description="Découvrez des histoires inspirantes et des résultats concrets."
          link="Lire"
          color="pink"
        />
      </section>

      {/* Call to Action Final - RESPONSIVE FIXÉ */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Rejoignez le mouvement
          </h2>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Plus de 1000 établissements ont déjà fait le choix du numérique responsable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-sm sm:text-base">
              Créer mon compte
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold border-2 border-white/20 hover:border-white/40 transition-all text-sm sm:text-base">
              Contacter un expert
            </button>
          </div>
        </div>
      </section>

      {/* Section Avantages - RESPONSIVE FIXÉ */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 dark:border-slate-800 p-4 sm:p-6 lg:p-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
          Pourquoi choisir NIRD Connect ?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <BenefitCard 
            title="Économies substantielles"
            description="Réduisez vos coûts de 40 à 70%"
          />
          <BenefitCard 
            title="Impact environnemental"
            description="Réduisez votre empreinte carbone"
          />
          <BenefitCard 
            title="Communauté active"
            description="Soutien de centaines d'établissements"
          />
          <BenefitCard 
            title="Indépendance technologique"
            description="Contrôle de votre infrastructure"
          />
          <BenefitCard 
            title="Formation continue"
            description="Ressources pédagogiques de qualité"
          />
          <BenefitCard 
            title="Support technique"
            description="Entraide et expertises partagées"
          />
        </div>
      </section>
    </div>
  );
}

// ========== COMPOSANTS RESPONSIVES ==========

function StatCardModern({ number, label, color, trend }) {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600'
  };

  const bgColors = {
    blue: 'bg-blue-50 dark:bg-blue-900/20',
    green: 'bg-green-50 dark:bg-green-900/20',
    purple: 'bg-purple-50 dark:bg-purple-900/20',
    pink: 'bg-pink-50 dark:bg-pink-900/20'
  };

  return (
    <div className={`${bgColors[color]} rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all group cursor-pointer`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
        {/* Nombre - Taille adaptative */}
        <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent break-all`}>
          {number}
        </div>
        {/* Badge tendance */}
        <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full whitespace-nowrap">
          {trend}
        </span>
      </div>
      {/* Label */}
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium line-clamp-2">
        {label}
      </p>
    </div>
  );
}

function FeatureCardModern({ title, description, link, color }) {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600'
  };

  const hoverColors = {
    blue: 'group-hover:border-blue-300 dark:group-hover:border-blue-700',
    purple: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
    pink: 'group-hover:border-pink-300 dark:group-hover:border-pink-700'
  };

  return (
    <div className={`group bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-slate-800 ${hoverColors[color]} hover:shadow-xl transition-all cursor-pointer`}>
      {/* Header avec gradient */}
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${colors[color]} mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}></div>
      
      {/* Titre */}
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
        {description}
      </p>
      
      {/* Lien */}
      <button className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent flex items-center gap-2 group-hover:gap-3 transition-all`}>
        {link}
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
}

function BenefitCard({ title, description }) {
  return (
    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group">
      {/* Icône */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      {/* Texte */}
      <div className="min-w-0 flex-1">
        <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div className="space-y-8 animate-fade-in">
//       {/* Hero Section Moderne */}
//       <section className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-800 overflow-hidden">
//         {/* Gradient subtil en arrière-plan */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
//         <div className="relative px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
//           <div className="max-w-4xl">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full mb-6">
//               <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
//               <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
//                 Plateforme collaborative NIRD
//               </span>
//             </div>

//             {/* Titre */}
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
//               <span className="text-gray-900 dark:text-white">Bienvenue sur </span>
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 NIRD Connect
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl">
//               Rejoignez la communauté des établissements engagés dans le 
//               <span className="font-semibold text-gray-900 dark:text-white"> Numérique Inclusif, Responsable et Durable</span>. 
//               Partagez vos expériences, trouvez des solutions et participez à la transition numérique éducative.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
//                 Démarrer
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </button>
              
//               <button className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold border-2 border-gray-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all flex items-center justify-center gap-2">
//                 En savoir plus
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Modernes */}
//       <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//         <StatCardModern 
//           number="1,285" 
//           label="Établissements partenaires" 
//           color="blue"
//           trend="+12%"
//         />
//         <StatCardModern 
//           number="85,420" 
//           label="Ordinateurs reconditionnés" 
//           color="green"
//           trend="+8%"
//         />
//         <StatCardModern 
//           number="12.4M€" 
//           label="Économies réalisées" 
//           color="purple"
//           trend="+15%"
//         />
//         <StatCardModern 
//           number="1,230t" 
//           label="CO₂ évités" 
//           color="pink"
//           trend="+10%"
//         />
//       </section>

//       {/* Features Grid Moderne */}
//       <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <FeatureCardModern 
//           title="Forum Collaboratif"
//           description="Échangez avec la communauté, posez vos questions et partagez vos solutions. Un espace d'entraide actif et bienveillant."
//           link="Accéder au forum"
//           color="blue"
//         />

//         <FeatureCardModern 
//           title="Carte Interactive"
//           description="Explorez les établissements NIRD sur une carte interactive. Trouvez des mentors et des partenaires près de chez vous."
//           link="Voir la carte"
//           color="purple"
//         />

//         <FeatureCardModern 
//           title="Témoignages & Retours"
//           description="Découvrez des histoires inspirantes et des résultats concrets. Apprenez des succès et des défis d'autres établissements."
//           link="Lire les témoignages"
//           color="pink"
//         />
//       </section>

//       {/* Call to Action Final */}
//       <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
//         <div className="relative px-6 sm:px-8 py-12 sm:py-16 text-center">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Rejoignez le mouvement
//           </h2>
//           <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
//             Plus de 1000 établissements ont déjà fait le choix du numérique responsable. 
//             Et vous, quand franchissez-vous le pas ?
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
//               Créer mon compte
//             </button>
//             <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold border-2 border-white/20 hover:border-white/40 transition-all">
//               Contacter un expert
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Section Avantages */}
//       <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-800 p-6 sm:p-8 lg:p-12">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//           Pourquoi choisir NIRD Connect ?
//         </h2>
        
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <BenefitCard 
//             title="Économies substantielles"
//             description="Réduisez vos coûts informatiques de 40 à 70% en moyenne"
//           />
//           <BenefitCard 
//             title="Impact environnemental"
//             description="Contribuez activement à la réduction de l'empreinte carbone"
//           />
//           <BenefitCard 
//             title="Communauté active"
//             description="Bénéficiez du soutien de centaines d'établissements"
//           />
//           <BenefitCard 
//             title="Indépendance technologique"
//             description="Reprenez le contrôle de votre infrastructure numérique"
//           />
//           <BenefitCard 
//             title="Formation continue"
//             description="Accédez à des ressources pédagogiques de qualité"
//           />
//           <BenefitCard 
//             title="Support technique"
//             description="Profitez d'une entraide et d'expertises partagées"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// // ========== COMPOSANTS MODERNES ==========

// function StatCardModern({ number, label, color, trend }) {
//   const colors = {
//     blue: 'from-blue-500 to-blue-600',
//     green: 'from-green-500 to-green-600',
//     purple: 'from-purple-500 to-purple-600',
//     pink: 'from-pink-500 to-pink-600'
//   };

//   const bgColors = {
//     blue: 'bg-blue-50 dark:bg-blue-900/20',
//     green: 'bg-green-50 dark:bg-green-900/20',
//     purple: 'bg-purple-50 dark:bg-purple-900/20',
//     pink: 'bg-pink-50 dark:bg-pink-900/20'
//   };

//   return (
//     <div className={`${bgColors[color]} rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all group cursor-pointer`}>
//       <div className="flex items-start justify-between mb-3">
//         <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent`}>
//           {number}
//         </div>
//         <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
//           {trend}
//         </span>
//       </div>
//       <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
//         {label}
//       </p>
//     </div>
//   );
// }

// function FeatureCardModern({ title, description, link, color }) {
//   const colors = {
//     blue: 'from-blue-500 to-blue-600',
//     purple: 'from-purple-500 to-purple-600',
//     pink: 'from-pink-500 to-pink-600'
//   };

//   const hoverColors = {
//     blue: 'group-hover:border-blue-300 dark:group-hover:border-blue-700',
//     purple: 'group-hover:border-purple-300 dark:group-hover:border-purple-700',
//     pink: 'group-hover:border-pink-300 dark:group-hover:border-pink-700'
//   };

//   return (
//     <div className={`group bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-gray-200 dark:border-slate-800 ${hoverColors[color]} hover:shadow-xl transition-all cursor-pointer`}>
//       {/* Header avec gradient */}
//       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[color]} mb-6 group-hover:scale-110 transition-transform`}></div>
      
//       <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
//         {title}
//       </h3>
      
//       <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
//         {description}
//       </p>
      
//       <button className={`text-sm sm:text-base font-semibold bg-gradient-to-r ${colors[color]} bg-clip-text text-transparent flex items-center gap-2 group-hover:gap-3 transition-all`}>
//         {link}
//         <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//         </svg>
//       </button>
//     </div>
//   );
// }

// function BenefitCard({ title, description }) {
//   return (
//     <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group">
//       <div className="flex-shrink-0">
//         <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
//           <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//         </div>
//       </div>
//       <div>
//         <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
//           {title}
//         </h4>
//         <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

