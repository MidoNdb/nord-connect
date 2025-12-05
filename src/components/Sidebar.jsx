import { useState } from 'react';

export default function Sidebar({ activeFeature, setActiveFeature, isCollapsed, setIsCollapsed }) {
  return (
    <aside 
      className={`
        fixed left-0 top-0 h-screen z-50
        ${isCollapsed ? 'w-20' : 'w-72'}
        bg-white dark:bg-slate-900
        border-r border-gray-200 dark:border-slate-800
        shadow-xl
        transition-all duration-300 ease-in-out
        overflow-y-auto
      `}
    >
      {/* Header avec Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏰</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  NIRD Connect
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Résistance numérique
                </p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg mx-auto">
              <span className="text-2xl">🏰</span>
            </div>
          )}
          
          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="Réduire"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors mx-auto"
              title="Ouvrir"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
       
        <NavItem
          icon={<HomeIcon />}
          label="Accueil"
          active={activeFeature === 'home'}
          onClick={() => setActiveFeature('home')}
          isCollapsed={isCollapsed}
        />
        {/* Divider avec label */}
        {!isCollapsed && (
          <div className="pt-6 pb-2 px-3">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Communauté
            </p>
          </div>
        )}
        
        {isCollapsed && (
          <div className="my-4 mx-4 h-px bg-gray-200 dark:bg-slate-800"></div>
        )}

        <NavItem
          icon={<ForumIcon />}
          label="Forum"
          active={activeFeature === 'forum'}
          onClick={() => setActiveFeature('forum')}
          isCollapsed={isCollapsed}
          badge="12"
        />
        
        <NavItem
          icon={<MapIcon />}
          label="Carte Interactive"
          active={activeFeature === 'map'}
          onClick={() => setActiveFeature('map')}
          isCollapsed={isCollapsed}
        />
        
        <NavItem
          icon={<TestimonialIcon />}
          label="Témoignages"
          active={activeFeature === 'testimonials'}
          onClick={() => setActiveFeature('testimonials')}
          isCollapsed={isCollapsed}
          badge="4"
        />

        {/* Divider */}
        <div className="my-4 mx-4 h-px bg-gray-200 dark:bg-slate-800"></div>

       
      </nav>

      {/* Footer Utilisateur */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white dark:from-slate-900 to-transparent">
          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-3 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                  M
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  Mohamed
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  Développeur
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg mx-auto cursor-pointer hover:scale-110 transition-transform relative">
            M
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
          </div>
        </div>
      )}
    </aside>
  );
}

// Composant NavItem moderne
function NavItem({ icon, label, active, onClick, isCollapsed, badge, special }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
        transition-all duration-200 group relative
        ${active 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
        }
        ${special && !active ? 'border-2 border-dashed border-gray-300 dark:border-slate-700 hover:border-blue-400' : ''}
        ${isCollapsed ? 'justify-center' : ''}
      `}
    >
      {/* Icon avec animation */}
      <div className={`
        flex-shrink-0 transition-transform duration-200
        ${active ? 'scale-110' : 'group-hover:scale-110'}
      `}>
        {icon}
      </div>

      {/* Label */}
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left text-sm font-medium">
            {label}
          </span>
          
          {/* Badge */}
          {badge && (
            <span className={`
              px-2 py-0.5 text-xs font-bold rounded-full
              ${active 
                ? 'bg-white/20 text-white' 
                : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              }
            `}>
              {badge}
            </span>
          )}

          {/* Flèche pour item actif */}
          {active && (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </>
      )}
      
      {/* Tooltip pour mode collapsed */}
      {isCollapsed && (
        <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl">
          {label}
          {badge && (
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {badge}
            </span>
          )}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
        </div>
      )}
    </button>
  );
}

// Icônes SVG modernes
function HomeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function ForumIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function TestimonialIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function GameIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  );
}







// import { useState } from 'react';

// export default function Sidebar({ activeFeature, setActiveFeature, isCollapsed, setIsCollapsed }) {
//   return (
//     <aside 
//       className={`
//         fixed left-0 top-0 h-screen z-50
//         ${isCollapsed ? 'w-20' : 'w-72'}
//         bg-white dark:bg-slate-900
//         border-r border-gray-200 dark:border-slate-800
//         shadow-xl
//         transition-all duration-300 ease-in-out
//         overflow-y-auto
//       `}
//     >
//       {/* Header avec Logo */}
//       <div className="p-6 border-b border-gray-200 dark:border-slate-800">
//         <div className="flex items-center justify-between">
//           {!isCollapsed ? (
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
//                 <span className="text-2xl">🏰</span>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold text-gray-900 dark:text-white">
//                   NIRD Connect
//                 </h1>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   Résistance numérique
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg mx-auto">
//               <span className="text-2xl">🏰</span>
//             </div>
//           )}
          
//           {!isCollapsed && (
//             <button
//               onClick={() => setIsCollapsed(true)}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
//               title="Réduire"
//             >
//               <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
//               </svg>
//             </button>
//           )}
          
//           {isCollapsed && (
//             <button
//               onClick={() => setIsCollapsed(false)}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors mx-auto"
//               title="Ouvrir"
//             >
//               <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
//               </svg>
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="p-4 space-y-2">
//         <NavItem
//           icon={<HomeIcon />}
//           label="Game"
//           active={activeFeature === 'home'}
//           onClick={() => setActiveFeature('home')}
//           isCollapsed={isCollapsed}
//         />

//         {/* Divider avec label */}
//         {!isCollapsed && (
//           <div className="pt-6 pb-2 px-3">
//             <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//               Communauté
//             </p>
//           </div>
//         )}
        
//         {isCollapsed && (
//           <div className="my-4 mx-4 h-px bg-gray-200 dark:bg-slate-800"></div>
//         )}

//         <NavItem
//           icon={<ForumIcon />}
//           label="Forum"
//           active={activeFeature === 'forum'}
//           onClick={() => setActiveFeature('forum')}
//           isCollapsed={isCollapsed}
//           badge="12"
//         />
        
//         <NavItem
//           icon={<MapIcon />}
//           label="Carte Interactive"
//           active={activeFeature === 'map'}
//           onClick={() => setActiveFeature('map')}
//           isCollapsed={isCollapsed}
//         />
        
//         <NavItem
//           icon={<TestimonialIcon />}
//           label="Témoignages"
//           active={activeFeature === 'testimonials'}
//           onClick={() => setActiveFeature('testimonials')}
//           isCollapsed={isCollapsed}
//           badge="4"
//         />

//         {/* Divider */}
//         {/* <div className="my-4 mx-4 h-px bg-gray-200 dark:bg-slate-800"></div> */}

//         {/* <NavItem
//           icon={<GameIcon />}
//           label="Simulateur"
//           active={activeFeature === 'game'}
//           onClick={() => setActiveFeature('game')}
//           isCollapsed={isCollapsed}
//           special
//         /> */}
//       </nav>

//       {/* Footer Utilisateur */}
//       {!isCollapsed && (
//         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white dark:from-slate-900 to-transparent">
//           <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-3 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer group">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
//                   M
//                 </div>
//                 <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
//                   Mohamed
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
//                   Développeur
//                 </p>
//               </div>
//               <svg className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {isCollapsed && (
//         <div className="absolute bottom-0 left-0 right-0 p-4">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg mx-auto cursor-pointer hover:scale-110 transition-transform relative">
//             M
//             <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
//           </div>
//         </div>
//       )}
//     </aside>
//   );
// }

// // Composant NavItem moderne
// function NavItem({ icon, label, active, onClick, isCollapsed, badge, special }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
//         transition-all duration-200 group relative
//         ${active 
//           ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
//           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
//         }
//         ${special && !active ? 'border-2 border-dashed border-gray-300 dark:border-slate-700 hover:border-blue-400' : ''}
//         ${isCollapsed ? 'justify-center' : ''}
//       `}
//     >
//       {/* Icon avec animation */}
//       <div className={`
//         flex-shrink-0 transition-transform duration-200
//         ${active ? 'scale-110' : 'group-hover:scale-110'}
//       `}>
//         {icon}
//       </div>

//       {/* Label */}
//       {!isCollapsed && (
//         <>
//           <span className="flex-1 text-left text-sm font-medium">
//             {label}
//           </span>
          
//           {/* Badge */}
//           {badge && (
//             <span className={`
//               px-2 py-0.5 text-xs font-bold rounded-full
//               ${active 
//                 ? 'bg-white/20 text-white' 
//                 : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
//               }
//             `}>
//               {badge}
//             </span>
//           )}

//           {/* Flèche pour item actif */}
//           {active && (
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//             </svg>
//           )}
//         </>
//       )}
      
//       {/* Tooltip pour mode collapsed */}
//       {isCollapsed && (
//         <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl">
//           {label}
//           {badge && (
//             <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
//               {badge}
//             </span>
//           )}
//           <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
//         </div>
//       )}
//     </button>
//   );
// }

// // Icônes SVG modernes
// function HomeIcon() {
//   return (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//     </svg>
//   );
// }

// function ForumIcon() {
//   return (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//     </svg>
//   );
// }

// function MapIcon() {
//   return (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
//     </svg>
//   );
// }

// function TestimonialIcon() {
//   return (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//     </svg>
//   );
// }

// function GameIcon() {
//   return (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
//     </svg>
//   );
// }