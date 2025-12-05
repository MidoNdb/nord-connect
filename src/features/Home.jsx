export default function Home({ onStartGame }) {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-[#3d2f47] via-[#1b0f27] to-[#683e79] -m-8 text-white font-sans flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          {/* Logo animé */}
          <div className="relative mb-8">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">

              {/* Cercle principal */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6D464] via-[#F6A55A] to-[#F37CCF] rounded-full animate-spin-slow"></div>

              {/* Rayons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#8A3FF7] to-transparent rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-45">
                <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#1A84D9] to-transparent rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-90">
                <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#F6D464] to-transparent rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center" style={{transform: 'rotate(135deg)'}}>
                <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#F37CCF] to-transparent rounded-full animate-pulse"></div>
              </div>

              {/* Cercle central */}
              <div className="absolute inset-8 md:inset-12 bg-gradient-to-br from-[#0057A4] via-[#1A84D9] to-[#8A3FF7] rounded-full flex items-center justify-center">
                <div className="text-3xl md:text-5xl font-bold">VN</div>
              </div>

              {/* Points décoratifs */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#8A3FF7] to-[#1A84D9] rounded-full animate-bounce"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#F6D464] to-[#F6A55A] rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#F37CCF] to-[#8A3FF7] rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#1A84D9] to-[#0057A4] rounded-full animate-bounce"></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#F6D464] via-[#F37CCF] to-[#8A3FF7] bg-clip-text text-transparent">
              Village Numérique
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8A3FF7] via-[#1A84D9] to-[#0057A4] bg-clip-text text-transparent">
              Résistant
            </span>
          </h1>
        </div>

        {/* Contenu principal */}
        <div className="w-full max-w-4xl mx-auto">

          {/* Bouton Get Started */}
          <div className="text-center mb-12">
            <button
  onClick={onStartGame}
  className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[#F6D464] via-[#F6A55A] to-[#F37CCF] text-[#0A2540] font-bold rounded-xl md:rounded-2xl text-lg md:text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

  <div className="relative flex items-center justify-center space-x-3 md:space-x-4">
    <span>Get Started</span>
    <div className="text-xl md:text-2xl animate-bounce group-hover:animate-none">→</div>
  </div>
</button>

          </div>

          {/* Footer */}
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div>
                <div className="text-sm text-white/60 mb-2">Basé sur la démarche</div>
                <a
                  href="https://nird.forge.apps.education.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6D464] hover:text-[#F6A55A] transition-colors font-semibold text-lg"
                >
                  NIRD - Numérique Identique Résilient et Durable
                </a>
              </div>

              <div className="text-sm text-white/60">
                Un jeu éducatif pour comprendre les enjeux du numérique à l'école
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation rotation lente */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}


// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Game from "./Game";

// function Home() {
//   const [activeFeature, setActiveFeature] = useState('home');
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);

//   // Si le jeu est démarré, afficher uniquement le jeu
//   if (gameStarted) {
//     return <Game />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`${sidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
//           <Sidebar 
//             activeFeature={activeFeature}
//             setActiveFeature={setActiveFeature}
//             collapsed={sidebarCollapsed}
//             setCollapsed={setSidebarCollapsed}
//           />
//         </div>

//         {/* Main Content */}
//         <main className="flex-1">
//           {activeFeature === 'home' ? (
//             // Page d'accueil Village Numérique
//             <div className="min-h-screen bg-gradient-to-br from-[#3d2f47] via-[#1b0f27] to-[#683e79] text-white font-sans overflow-hidden">
//               <div className="relative container mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col items-center justify-center">
                
//                 {/* Header */}
//                 <div className="text-center mb-8 md:mb-12">
                  
//                   {/* Logo animé */}
//                   <div className="relative mb-6 md:mb-8">
//                     <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto">

//                       {/* Cercle principal */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-[#F6D464] via-[#F6A55A] to-[#F37CCF] rounded-full animate-spin-slow"></div>

//                       {/* Rayons */}
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#8A3FF7] to-transparent rounded-full animate-pulse"></div>
//                       </div>
//                       <div className="absolute inset-0 flex items-center justify-center rotate-45">
//                         <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#1A84D9] to-transparent rounded-full animate-pulse"></div>
//                       </div>
//                       <div className="absolute inset-0 flex items-center justify-center rotate-90">
//                         <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#F6D464] to-transparent rounded-full animate-pulse"></div>
//                       </div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#F37CCF] to-transparent rounded-full animate-pulse" style={{transform: 'rotate(135deg)'}}></div>
//                       </div>

//                       {/* Cercle central */}
//                       <div className="absolute inset-8 md:inset-12 bg-gradient-to-br from-[#0057A4] via-[#1A84D9] to-[#8A3FF7] rounded-full flex items-center justify-center">
//                         <div className="text-3xl md:text-5xl font-bold">VN</div>
//                       </div>

//                       {/* Points décoratifs */}
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#8A3FF7] to-[#1A84D9] rounded-full animate-bounce"></div>
//                       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#F6D464] to-[#F6A55A] rounded-full animate-bounce"></div>
//                       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#F37CCF] to-[#8A3FF7] rounded-full animate-bounce"></div>
//                       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#1A84D9] to-[#0057A4] rounded-full animate-bounce"></div>
//                     </div>
//                   </div>

//                   <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6">
//                     <span className="bg-gradient-to-r from-[#F6D464] via-[#F37CCF] to-[#8A3FF7] bg-clip-text text-transparent">
//                       Village Numérique
//                     </span>
//                     <br />
//                     <span className="bg-gradient-to-r from-[#8A3FF7] via-[#1A84D9] to-[#0057A4] bg-clip-text text-transparent">
//                       Résistant
//                     </span>
//                   </h1>
//                 </div>

//                 {/* Contenu principal */}
//                 <div className="w-full max-w-4xl mx-auto">

//                   {/* Bouton Get Started */}
//                   <div className="text-center">
//                     <button
//                       onClick={() => setGameStarted(true)}
//                       className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[#F6D464] via-[#F6A55A] to-[#F37CCF] text-[#0A2540] font-bold rounded-xl md:rounded-2xl text-lg md:text-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
//                     >
//                       {/* Effet de brillance */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

//                       <div className="relative flex items-center justify-center space-x-3 md:space-x-4">
//                         <span>Get Started</span>
//                         <div className="text-xl md:text-2xl animate-bounce group-hover:animate-none">→</div>
//                       </div>
//                     </button>
//                   </div>

//                   {/* Footer */}
//                   <div className="mt-12 md:mt-16 pt-6 md:pt-8">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                       <div className="text-center md:text-left">
//                         <div className="text-sm text-white/60 mb-2">Basé sur la démarche</div>

//                         <a
//                           href="https://nird.forge.apps.education.fr/"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-[#F6D464] hover:text-[#F6A55A] transition-colors font-semibold text-lg"
//                         >
//                           NIRD - Numérique Identique Résilient et Durable
//                         </a>
//                       </div>

//                       <div className="text-sm text-white/60">
//                         Un jeu éducatif pour comprendre les enjeux du numérique à l'école
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Animation rotation lente */}
//               <style>{`
//                 @keyframes spin-slow {
//                   from { transform: rotate(0deg); }
//                   to { transform: rotate(360deg); }
//                 }
//                 .animate-spin-slow {
//                   animation: spin-slow 20s linear infinite;
//                 }
//               `}</style>
//             </div>
//           ) : (
//             // Autres pages
//             <div className="p-8">
//               <div className="max-w-7xl mx-auto">
//                 <div className="mb-8">
//                   <h1 className="text-4xl font-bold text-gray-900 mb-2">
//                     {getPageTitle(activeFeature)}
//                   </h1>
//                   <p className="text-gray-600 text-lg">
//                     {getPageSubtitle(activeFeature)}
//                   </p>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-lg p-6">
//                   {renderFeature(activeFeature)}
//                 </div>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// function renderFeature(feature) {
//   const features = {
//     forum: <div>Forum Content</div>,
//     map: <div>Map Content</div>,
//     testimonials: <div>Testimonials Content</div>,
//     game: <div>Game Content</div>
//   };
//   return features[feature] || <div>Page non trouvée</div>;
// }

// function getPageTitle(feature) {
//   return {
//     home: 'Bienvenue',
//     forum: 'Forum',
//     map: 'Carte',
//     testimonials: 'Témoignages',
//     game: 'Simulateur'
//   }[feature] || 'NIRD Connect';
// }

// function getPageSubtitle(feature) {
//   return {
//     home: 'Découvrez la plateforme NIRD Connect',
//     forum: 'Espace d\'entraide communautaire',
//     map: 'Établissements engagés dans NIRD',
//     testimonials: 'Histoires de réussite',
//     game: 'Testez votre stratégie'
//   }[feature] || '';
// }

// export default Home;
