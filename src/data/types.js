// src/data/types.jsx

/**
 * Carte Problème
 */
export const ProblemCardType = {
  id: 0,
  title: '',
  description: '',
  category: '',
  context: ''
};

/**
 * Carte Solution
 */
export const SolutionCardType = {
  id: 0,
  title: '',
  description: '',
  sustainability: 0, // 0-100
  cost: 0, // 0-100
  autonomy: 0, // 0-100
  difficulty: 'facile', // 'facile' | 'moyen' | 'difficile'
  explanation: '',
  isCorrect: false,
  colorVariant: 'blue', // 'blue' | 'violet' | 'pink' | 'orange' | 'yellow'
  icon: '' // Emoji ou icône
};

/**
 * État du jeu
 */
export const GameStateType = {
  round: 0,
  problem: null,
  playerScore: 0,
  bigTechScore: 0,
  selectedSolution: null,
  bigTechSelection: null,
  revealed: false,
  gameOver: false,
  message: ''
};

/**
 * Helper : Valide si une solution est complète
 */
export function isValidSolution(solution) {
  return (
    solution &&
    typeof solution.id === 'number' &&
    typeof solution.title === 'string' &&
    typeof solution.sustainability === 'number' &&
    typeof solution.cost === 'number' &&
    typeof solution.autonomy === 'number' &&
    ['facile', 'moyen', 'difficile'].includes(solution.difficulty)
  );
}

/**
 * Helper : Valide si un problème est complet
 */
export function isValidProblem(problem) {
  return (
    problem &&
    typeof problem.id === 'number' &&
    typeof problem.title === 'string' &&
    typeof problem.description === 'string' &&
    typeof problem.category === 'string'
  );
}

/**
 * Helper : Couleurs par difficulté
 */
export function getDifficultyColors(difficulty) {
  const colors = {
    facile: {
      bg: 'bg-[#F6D464]/30',
      text: 'text-[#F6D464]',
      border: 'border-[#F6D464]/50'
    },
    moyen: {
      bg: 'bg-[#F6A55A]/30',
      text: 'text-[#F6A55A]',
      border: 'border-[#F6A55A]/50'
    },
    difficile: {
      bg: 'bg-[#F37CCF]/30',
      text: 'text-[#F37CCF]',
      border: 'border-[#F37CCF]/50'
    }
  };
  return colors[difficulty] || colors.moyen;
}

/**
 * Helper : Couleurs par variant
 */
export function getColorVariant(variant) {
  const variants = {
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    orange: 'from-orange-500 to-orange-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };
  return variants[variant] || variants.blue;
}