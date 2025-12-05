import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './features/Home';
import Forum from './features/Forum';
import MapPage from './features/Map';
import Testimonials from './features/Testimonials';
import Game from './features/Game';

export default function App() {
  const [activeFeature, setActiveFeature] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <Sidebar 
        activeFeature={activeFeature} 
        setActiveFeature={setActiveFeature}
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      {/* Main Content avec margin dynamique */}
      <div 
        className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}
      >
        {/* Top Bar moderne */}
        <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-40 backdrop-blur-sm bg-white/95 dark:bg-slate-900/95">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {getPageTitle(activeFeature)}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                {getPageSubtitle(activeFeature)}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Settings */}
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <div className="max-w-7xl mx-auto">
            {renderFeature(activeFeature)}
          </div>
        </main>
      </div>
    </div>
  );
}

function renderFeature(feature) {
  const features = {
    home: <Home />,
    forum: <Forum />,
    map: <MapPage />,
    testimonials: <Testimonials />,
    game: <Game />
  };
  return features[feature] || <Home />;
}

function getPageTitle(feature) {
  return {
    home: 'Bienvenue',
    forum: 'Forum Collaboratif',
    map: 'Carte Interactive',
    testimonials: 'Témoignages',
    game: 'Simulateur'
  }[feature] || 'NIRD Connect';
}

function getPageSubtitle(feature) {
  return {
    home: 'Découvrez la plateforme NIRD Connect',
    forum: 'Posez vos questions et partagez votre expérience',
    map: 'Explorez les établissements engagés dans NIRD',
    testimonials: 'Laissez-vous inspirer par des réussites concrètes',
    game: 'Testez votre stratégie de transition numérique'
  }[feature] || '';
}
