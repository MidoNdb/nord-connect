// src/data/cards.jsx

// ========== LISTE DES PROBLÈMES ==========

export const problems = [
  {
    id: 1,
    title: "Fin du support Windows 10",
    description: "Un lycée doit renouveler 200 ordinateurs car Microsoft arrête le support de Windows 10.",
    category: "Systèmes d'exploitation",
    context: "Les machines fonctionnent encore parfaitement mais deviendront vulnérables sans mises à jour de sécurité."
  },
  {
    id: 2,
    title: "Suite bureautique payante",
    description: "Un collège doit payer 5000€/an pour des licences Microsoft Office.",
    category: "Logiciels",
    context: "Budget contraint, impossible de financer d'autres projets pédagogiques."
  },
  {
    id: 3,
    title: "Cloud éducatif américain",
    description: "Données des élèves stockées sur des serveurs hors UE.",
    category: "Données & RGPD",
    context: "Problème de souveraineté numérique et conformité RGPD."
  },
  {
    id: 4,
    title: "Tablettes éducatives verrouillées",
    description: "Des tablettes pédagogiques ne peuvent installer que des apps du store propriétaire.",
    category: "Matériel",
    context: "Impossible d'adapter les outils aux besoins spécifiques des enseignants."
  },
  {
    id: 5,
    title: "Abonnement annuel obligatoire",
    description: "Un logiciel éducatif passe en mode SaaS avec abonnement annuel.",
    category: "Modèle économique",
    context: "Dépendance financière à long terme, coûts imprévisibles."
  }
];

// ========== SOLUTIONS PAR PROBLÈME ==========

export const problemSolutions = {
  // --- PROBLÈME 1 : Windows 10 ---
  1: [
    {
      id: 101,
      title: "Migrer vers Windows 11",
      description: "Acheter de nouveaux PC avec Windows 11 préinstallé.",
      sustainability: 20,
      cost: 90,
      autonomy: 10,
      difficulty: 'facile',
      explanation: "Solution rapide mais coûteuse et peu durable. Nouvelle obsolescence dans 5 ans.",
      isCorrect: false
    },
    {
      id: 102,
      title: "Installer Linux Éducatif",
      description: "Réinstaller les PC avec une distribution Linux adaptée.",
      sustainability: 90,
      cost: 20,
      autonomy: 95,
      difficulty: 'moyen',
      explanation: "Prolonge la vie des machines de 5+ ans. Autonomie totale et gratuite.",
      isCorrect: true
    },
    {
      id: 103,
      title: "Passer en mode station",
      description: "Utiliser les PC comme terminaux légers connectés à un serveur.",
      sustainability: 70,
      cost: 40,
      autonomy: 80,
      difficulty: 'difficile',
      explanation: "Optimise les ressources existantes. Nécessite un serveur central.",
      isCorrect: false
    },
    {
      id: 104,
      title: "Mixte Windows/Linux",
      description: "Garder certains PC sous Windows, migrer d'autres vers Linux.",
      sustainability: 60,
      cost: 60,
      autonomy: 50,
      difficulty: 'moyen',
      explanation: "Transition progressive. Permet de tester et former en douceur.",
      isCorrect: false
    }
  ],

  // --- PROBLÈME 2 : Suite bureautique ---
  2: [
    {
      id: 201,
      title: "Office 365 Éducation",
      description: "Abonnement cloud avec outils collaboratifs.",
      sustainability: 30,
      cost: 70,
      autonomy: 20,
      difficulty: 'facile',
      explanation: "Facile à déployer mais verrouillage dans l'écosystème Microsoft.",
      isCorrect: false
    },
    {
      id: 202,
      title: "LibreOffice + Nextcloud",
      description: "Logiciels libres + hébergement local ou mutualisé.",
      sustainability: 85,
      cost: 30,
      autonomy: 90,
      difficulty: 'moyen',
      explanation: "Économies importantes, données maîtrisées, formats ouverts.",
      isCorrect: true
    },
    {
      id: 203,
      title: "Google Workspace Éducation",
      description: "Suite Google gratuite pour l'éducation.",
      sustainability: 40,
      cost: 10,
      autonomy: 15,
      difficulty: 'facile',
      explanation: "Gratuit mais dépendance à Google et données aux USA.",
      isCorrect: false
    },
    {
      id: 204,
      title: "OnlyOffice + auto-hébergement",
      description: "Suite bureautique moderne auto-hébergée.",
      sustainability: 80,
      cost: 40,
      autonomy: 95,
      difficulty: 'difficile',
      explanation: "Solution professionnelle open-source. Contrôle total.",
      isCorrect: false
    }
  ],

  // --- PROBLÈME 3 : Cloud RGPD ---
  3: [
    {
      id: 301,
      title: "Cloud Éducatif Premium",
      description: "Solution cloud \"clé en main\" avec support technique.",
      sustainability: 40,
      cost: 80,
      autonomy: 15,
      difficulty: 'moyen',
      explanation: "Confort d'utilisation mais dépendance totale au fournisseur.",
      isCorrect: false
    },
    {
      id: 302,
      title: "Serveur local + logiciels libres",
      description: "Hébergement des données dans l'établissement.",
      sustainability: 95,
      cost: 40,
      autonomy: 100,
      difficulty: 'difficile',
      explanation: "Souveraineté numérique maximale, investissement durable.",
      isCorrect: true
    },
    {
      id: 303,
      title: "Cloud académique français",
      description: "Solution hébergée en France par l'Éducation Nationale.",
      sustainability: 70,
      cost: 50,
      autonomy: 60,
      difficulty: 'moyen',
      explanation: "Conforme RGPD, support institutionnel mais moins flexible.",
      isCorrect: false
    }
  ],

  // --- PROBLÈME 4 : Tablettes verrouillées ---
  4: [
    {
      id: 401,
      title: "Nouvelles tablettes pédagogiques",
      description: "Acheter des tablettes récentes avec licence éducative.",
      sustainability: 25,
      cost: 85,
      autonomy: 20,
      difficulty: 'facile',
      explanation: "Matériel neuf mais coûteux et verrouillé.",
      isCorrect: false
    },
    {
      id: 402,
      title: "Tablettes reconditionnées + LineageOS",
      description: "Matériel reconditionné avec Android libre.",
      sustainability: 80,
      cost: 35,
      autonomy: 85,
      difficulty: 'difficile',
      explanation: "Économie circulaire, contrôle total sur les apps.",
      isCorrect: true
    },
    {
      id: 403,
      title: "PC portables légers",
      description: "Remplacer par de petits PC portables sous Linux.",
      sustainability: 75,
      cost: 50,
      autonomy: 90,
      difficulty: 'moyen',
      explanation: "Plus polyvalents que les tablettes, réparables.",
      isCorrect: false
    }
  ],

  // --- PROBLÈME 5 : Abonnement SaaS ---
  5: [
    {
      id: 501,
      title: "Accepter l'abonnement",
      description: "Payer l'abonnement annuel pour conserver le service.",
      sustainability: 15,
      cost: 90,
      autonomy: 10,
      difficulty: 'facile',
      explanation: "Aucun changement mais coûts récurrents importants.",
      isCorrect: false
    },
    {
      id: 502,
      title: "Développer une alternative libre",
      description: "Créer un équivalent open-source avec la communauté.",
      sustainability: 95,
      cost: 60,
      autonomy: 100,
      difficulty: 'difficile',
      explanation: "Solution idéale mais nécessite temps et compétences.",
      isCorrect: true
    }
  ]
};

// import { 
//   problems, 
//   problemSolutions, 
//   getProblemById,
//   getSolutionsForProblem,
//   getCorrectSolution 
// } from '../data/cards';

// // Récupérer un problème
// const problem = getProblemById(1);

// // Récupérer ses solutions
// const solutions = getSolutionsForProblem(1);

// // Récupérer la bonne solution
// const correctSolution = getCorrectSolution(1);

// // Afficher tous les problèmes
// problems.map(problem => (
//   <div key={problem.id}>
//     <h3>{problem.title}</h3>
//     <p>{problem.description}</p>
//   </div>
// ));