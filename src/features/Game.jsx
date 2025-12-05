import { useState } from "react";
import { problems, problemSolutions } from "../data/cards";
import { getDifficultyColors } from "../data/types";

export default function Game({ onBackToHome }) {
  const [round, setRound] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [bigTechScore, setBigTechScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(problems[0]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [bigTechSelection, setBigTechSelection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSolutions = currentProblem ? problemSolutions[currentProblem.id] || [] : [];

  const getRandomBigTechChoice = () => {
    const easySolutions = currentSolutions.filter(s => s.difficulty === "facile");
    const randomIndex = Math.floor(Math.random() * currentSolutions.length);
    return easySolutions.length > 0
      ? easySolutions[Math.floor(Math.random() * easySolutions.length)]
      : currentSolutions[randomIndex];
  };

  const handleSelectSolution = (solution) => {
    if (!currentProblem || isAnimating) return;

    setSelectedSolution(solution);
    setIsAnimating(true);

    const bigTechChoice = getRandomBigTechChoice();
    setBigTechSelection(bigTechChoice);

    setTimeout(() => {
      setRevealed(true);

      setTimeout(() => {
        let result = "";

        if (solution.isCorrect) {
          setPlayerScore(prev => prev + 2);
          result = "🎯 Solution NIRD optimale ! +2 points";
        } else if (
          solution.sustainability > bigTechChoice.sustainability &&
          solution.autonomy > bigTechChoice.autonomy
        ) {
          setPlayerScore(prev => prev + 1);
          result = "✅ Votre solution est plus durable ! +1 point";
        } else if (bigTechChoice.isCorrect) {
          setBigTechScore(prev => prev + 2);
          result = "😱 Big Tech a choisi la bonne solution ! +2 points";
        } else if (bigTechChoice.cost < solution.cost) {
          setBigTechScore(prev => prev + 1);
          result = "💰 Solution Big Tech moins coûteuse +1 point";
        } else {
          if (Math.random() > 0.5) {
            setPlayerScore(prev => prev + 1);
            result = "⚖️ Votre solution est légèrement meilleure +1 point";
          } else {
            setBigTechScore(prev => prev + 1);
            result = "⚖️ Solution Big Tech légèrement meilleure +1 point";
          }
        }

        setMessage(result);

        const nextRound = round + 1;
        if (
          playerScore + 2 >= 10 ||
          bigTechScore + 2 >= 10 ||
          nextRound === problems.length
        ) {
          setTimeout(() => setGameOver(true), 1500);
        } else {
          setTimeout(() => {
            setRound(nextRound);
            setCurrentProblem(problems[nextRound]);
            setRevealed(false);
            setSelectedSolution(null);
            setBigTechSelection(null);
            setIsAnimating(false);
            setMessage("");
          }, 2000);
        }
      }, 1500);
    }, 500);
  };

  const resetGame = () => {
    setRound(0);
    setPlayerScore(0);
    setBigTechScore(0);
    setCurrentProblem(problems[0]);
    setGameOver(false);
    setMessage("");
    setRevealed(false);
    setSelectedSolution(null);
    setBigTechSelection(null);
    setIsAnimating(false);
  };

  // ========== COMPOSANT SOLUTION CARD ==========

  const SolutionCard = ({ solution, isSelected, isBigTech, onClick }) => {
    const diffColors = getDifficultyColors(solution.difficulty);

    return (
      <div
        className={`relative rounded-2xl p-4 sm:p-5 border-2 cursor-pointer transition-all duration-300 ${
          isBigTech
            ? "bg-gradient-to-br from-[#cde8ff] via-[#824292] to-[#c7aaf3] border-[#1A84D9]/50"
            : "bg-gradient-to-br from-[#8A3FF7] via-[#924a7d] to-[#2a1a36] border-[#F37CCF]/50"
        } ${
          isSelected
            ? isBigTech
              ? "border-[#0057A4] scale-[1.02] shadow-[0_0_30px_rgba(26,132,217,0.5)]"
              : "border-[#F6D464] scale-[1.02] shadow-[0_0_30px_rgba(246,212,100,0.5)]"
            : "hover:border-[#F6D464] hover:shadow-lg"
        } ${isAnimating && !isSelected ? "opacity-50" : "opacity-100"}`}
        onClick={onClick}
      >
        <div className={`absolute top-3 right-3 px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold ${diffColors.bg} ${diffColors.text} border ${diffColors.border}`}>
          {solution.difficulty.toUpperCase()}
        </div>

        <div className="pr-12">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-white drop-shadow-lg">
            {solution.title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mb-4">{solution.description}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-xs text-[#F6D464] font-semibold">DURABLE</div>
            <div className="font-bold text-base sm:text-lg text-white">{solution.sustainability}%</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-xs text-[#F6A55A] font-semibold">COÛT</div>
            <div className="font-bold text-base sm:text-lg text-white">{solution.cost}%</div>
          </div>
          <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="text-xs text-[#F37CCF] font-semibold">AUTONOME</div>
            <div className="font-bold text-base sm:text-lg text-white">{solution.autonomy}%</div>
          </div>
        </div>

        {isSelected && (
          <div className="absolute bottom-3 left-3 flex items-center space-x-2">
            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse ${isBigTech ? "bg-[#0057A4]" : "bg-[#F6D464]"}`}></div>
            <span className={`text-xs sm:text-sm font-semibold ${isBigTech ? "text-[#1A84D9]" : "text-[#F6D464]"}`}>
              {isBigTech ? "CHOIX BIG TECH" : "VOTRE CHOIX"}
            </span>
          </div>
        )}

        {revealed && solution.isCorrect && (
          <div className="absolute top-3 left-3 bg-[#F6D464]/20 px-2 sm:px-3 py-1 rounded-lg border border-[#F6D464]/30">
            <span className="text-xs text-[#F6D464] font-semibold">⭐ OPTIMALE</span>
          </div>
        )}
      </div>
    );
  };

  // ========== ÉCRAN GAME OVER ==========

  if (gameOver) {
    const playerWon = playerScore > bigTechScore;
    
    return (
      <div className="bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] -m-8 p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-73px)] flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 max-w-2xl w-full border-2 border-[#F6D464]/30 animate-fade-in">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              {playerWon ? "🎉 Victoire NIRD !" : "😔 Big Tech l'emporte..."}
            </h2>
            <p className="text-base sm:text-xl text-white/80">
              {playerWon 
                ? "Félicitations ! Vous avez prouvé que les solutions libres et durables sont les meilleures !"
                : "Ne vous découragez pas ! L'important est d'apprendre et de progresser."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-[#8A3FF7] to-[#2a1a36] rounded-2xl p-4 sm:p-6 border-2 border-[#F6D464]">
              <div className="text-[#F6D464] text-xs sm:text-sm font-semibold mb-2">VOTRE SCORE</div>
              <div className="text-4xl sm:text-5xl font-bold text-white">{playerScore}</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A84D9] to-[#0057A4] rounded-2xl p-4 sm:p-6 border-2 border-[#1A84D9]">
              <div className="text-[#1A84D9] text-xs sm:text-sm font-semibold mb-2">BIG TECH</div>
              <div className="text-4xl sm:text-5xl font-bold text-white">{bigTechScore}</div>
            </div>
          </div>

          <button
            onClick={resetGame}
            className="w-full bg-gradient-to-r from-[#F6D464] to-[#F6A55A] hover:from-[#F6A55A] hover:to-[#F37CCF] text-[#1a0b2e] font-bold py-3 sm:py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Rejouer
          </button>
        </div>
      </div>
    );
  }

  // ========== ÉCRAN DE JEU ==========

  return (
    <div className="bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] -m-8 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Bouton retour optionnel */}
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="mb-6 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au menu
          </button>
        )}

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Simulateur NIRD
              </h1>
              <p className="text-sm sm:text-base text-white/70">
                Problème {round + 1} sur {problems.length}
              </p>
            </div>
            
            {/* Scores */}
            <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex-1 sm:flex-none bg-gradient-to-br from-[#8A3FF7] to-[#2a1a36] rounded-xl p-3 sm:p-4 border-2 border-[#F6D464]/50">
                <div className="text-[#F6D464] text-xs font-semibold mb-1">VOUS</div>
                <div className="text-xl sm:text-2xl font-bold text-white">{playerScore}</div>
              </div>
              <div className="flex-1 sm:flex-none bg-gradient-to-br from-[#1A84D9] to-[#0057A4] rounded-xl p-3 sm:p-4 border-2 border-[#1A84D9]/50">
                <div className="text-[#1A84D9] text-xs font-semibold mb-1">BIG TECH</div>
                <div className="text-xl sm:text-2xl font-bold text-white">{bigTechScore}</div>
              </div>
            </div>
          </div>

          {/* Problème */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-[#F37CCF]/30">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="bg-[#F37CCF]/20 rounded-xl p-3 shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {currentProblem.title}
                </h2>
                <p className="text-sm sm:text-base text-white/80 mb-3">{currentProblem.description}</p>
                <p className="text-xs sm:text-sm text-white/60 italic">{currentProblem.context}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-6">
          {currentSolutions.map(solution => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              isSelected={selectedSolution?.id === solution.id || bigTechSelection?.id === solution.id}
              isBigTech={bigTechSelection?.id === solution.id}
              onClick={() => !isAnimating && handleSelectSolution(solution)}
            />
          ))}
        </div>

        {/* Message */}
        {message && (
          <div className="bg-[#F6D464]/20 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-[#F6D464]/50 text-center animate-fade-in mb-6">
            <p className="text-base sm:text-xl font-bold text-[#F6D464]">{message}</p>
          </div>
        )}

        {/* Explication */}
        {revealed && selectedSolution && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-white/20 animate-fade-in">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              💡 Explication de votre choix
            </h3>
            <p className="text-sm sm:text-base text-white/80">{selectedSolution.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { problems, problemSolutions } from "../data/cards";
// import { getDifficultyColors } from "../data/types";

// export default function Game() {
//   const [round, setRound] = useState(0);
//   const [playerScore, setPlayerScore] = useState(0);
//   const [bigTechScore, setBigTechScore] = useState(0);
//   const [currentProblem, setCurrentProblem] = useState(problems[0]);
//   const [gameOver, setGameOver] = useState(false);
//   const [message, setMessage] = useState("");
//   const [revealed, setRevealed] = useState(false);
//   const [selectedSolution, setSelectedSolution] = useState(null);
//   const [bigTechSelection, setBigTechSelection] = useState(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const currentSolutions = currentProblem ? problemSolutions[currentProblem.id] || [] : [];

//   const getRandomBigTechChoice = () => {
//     const easySolutions = currentSolutions.filter(s => s.difficulty === "facile");
//     const randomIndex = Math.floor(Math.random() * currentSolutions.length);
//     return easySolutions.length > 0
//       ? easySolutions[Math.floor(Math.random() * easySolutions.length)]
//       : currentSolutions[randomIndex];
//   };

//   const handleSelectSolution = (solution) => {
//     if (!currentProblem || isAnimating) return;

//     setSelectedSolution(solution);
//     setIsAnimating(true);

//     const bigTechChoice = getRandomBigTechChoice();
//     setBigTechSelection(bigTechChoice);

//     setTimeout(() => {
//       setRevealed(true);

//       setTimeout(() => {
//         let result = "";

//         if (solution.isCorrect) {
//           setPlayerScore(prev => prev + 2);
//           result = "🎯 Solution NIRD optimale ! +2 points";
//         } else if (
//           solution.sustainability > bigTechChoice.sustainability &&
//           solution.autonomy > bigTechChoice.autonomy
//         ) {
//           setPlayerScore(prev => prev + 1);
//           result = "✅ Votre solution est plus durable ! +1 point";
//         } else if (bigTechChoice.isCorrect) {
//           setBigTechScore(prev => prev + 2);
//           result = "😱 Big Tech a choisi la bonne solution ! +2 points";
//         } else if (bigTechChoice.cost < solution.cost) {
//           setBigTechScore(prev => prev + 1);
//           result = "💰 Solution Big Tech moins coûteuse +1 point";
//         } else {
//           if (Math.random() > 0.5) {
//             setPlayerScore(prev => prev + 1);
//             result = "⚖️ Votre solution est légèrement meilleure +1 point";
//           } else {
//             setBigTechScore(prev => prev + 1);
//             result = "⚖️ Solution Big Tech légèrement meilleure +1 point";
//           }
//         }

//         setMessage(result);

//         const nextRound = round + 1;
//         if (
//           playerScore + 2 >= 10 ||
//           bigTechScore + 2 >= 10 ||
//           nextRound === problems.length
//         ) {
//           setTimeout(() => setGameOver(true), 1500);
//         } else {
//           setTimeout(() => {
//             setRound(nextRound);
//             setCurrentProblem(problems[nextRound]);
//             setRevealed(false);
//             setSelectedSolution(null);
//             setBigTechSelection(null);
//             setIsAnimating(false);
//             setMessage("");
//           }, 2000);
//         }
//       }, 1500);
//     }, 500);
//   };

//   const resetGame = () => {
//     setRound(0);
//     setPlayerScore(0);
//     setBigTechScore(0);
//     setCurrentProblem(problems[0]);
//     setGameOver(false);
//     setMessage("");
//     setRevealed(false);
//     setSelectedSolution(null);
//     setBigTechSelection(null);
//     setIsAnimating(false);
//   };

//   // ========== COMPOSANT SOLUTION CARD ==========

//   const SolutionCard = ({ solution, isSelected, isBigTech, onClick }) => {
//     const diffColors = getDifficultyColors(solution.difficulty);

//     return (
//       <div
//         className={`relative rounded-2xl p-4 sm:p-5 border-2 cursor-pointer transition-all duration-300 ${
//           isBigTech
//             ? "bg-gradient-to-br from-[#cde8ff] via-[#824292] to-[#c7aaf3] border-[#1A84D9]/50"
//             : "bg-gradient-to-br from-[#8A3FF7] via-[#924a7d] to-[#2a1a36] border-[#F37CCF]/50"
//         } ${
//           isSelected
//             ? isBigTech
//               ? "border-[#0057A4] scale-[1.02] shadow-[0_0_30px_rgba(26,132,217,0.5)]"
//               : "border-[#F6D464] scale-[1.02] shadow-[0_0_30px_rgba(246,212,100,0.5)]"
//             : "hover:border-[#F6D464] hover:shadow-lg"
//         } ${isAnimating && !isSelected ? "opacity-50" : "opacity-100"}`}
//         onClick={onClick}
//       >
//         {/* Badge difficulté */}
//         <div className={`absolute top-3 right-3 px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold ${diffColors.bg} ${diffColors.text} border ${diffColors.border}`}>
//           {solution.difficulty.toUpperCase()}
//         </div>

//         {/* Contenu */}
//         <div className="pr-12">
//           <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-white drop-shadow-lg">
//             {solution.title}
//           </h3>
//           <p className="text-white/90 text-xs sm:text-sm mb-4">{solution.description}</p>
//         </div>

//         {/* Indicateurs */}
//         <div className="grid grid-cols-3 gap-2 mb-4">
//           <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
//             <div className="text-xs text-[#F6D464] font-semibold">DURABLE</div>
//             <div className="font-bold text-base sm:text-lg text-white">{solution.sustainability}%</div>
//           </div>
//           <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
//             <div className="text-xs text-[#F6A55A] font-semibold">COÛT</div>
//             <div className="font-bold text-base sm:text-lg text-white">{solution.cost}%</div>
//           </div>
//           <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm">
//             <div className="text-xs text-[#F37CCF] font-semibold">AUTONOME</div>
//             <div className="font-bold text-base sm:text-lg text-white">{solution.autonomy}%</div>
//           </div>
//         </div>

//         {/* Badge sélection */}
//         {isSelected && (
//           <div className="absolute bottom-3 left-3 flex items-center space-x-2">
//             <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse ${isBigTech ? "bg-[#0057A4]" : "bg-[#F6D464]"}`}></div>
//             <span className={`text-xs sm:text-sm font-semibold ${isBigTech ? "text-[#1A84D9]" : "text-[#F6D464]"}`}>
//               {isBigTech ? "CHOIX BIG TECH" : "VOTRE CHOIX"}
//             </span>
//           </div>
//         )}

//         {/* Badge solution optimale */}
//         {revealed && solution.isCorrect && (
//           <div className="absolute top-3 left-3 bg-[#F6D464]/20 px-2 sm:px-3 py-1 rounded-lg border border-[#F6D464]/30">
//             <span className="text-xs text-[#F6D464] font-semibold">⭐ OPTIMALE</span>
//           </div>
//         )}
//       </div>
//     );
//   };

//   // ========== ÉCRAN GAME OVER ==========

//   if (gameOver) {
//     const playerWon = playerScore > bigTechScore;
    
//     return (
//       <div className="bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] -m-8 p-4 sm:p-6 lg:p-8 min-h-screen">
//         <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 max-w-2xl w-full border-2 border-[#F6D464]/30 animate-fade-in">
//           <div className="text-center mb-6 sm:mb-8">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
//               {playerWon ? "🎉 Victoire NIRD !" : "😔 Big Tech l'emporte..."}
//             </h2>
//             <p className="text-base sm:text-xl text-white/80">
//               {playerWon 
//                 ? "Félicitations ! Vous avez prouvé que les solutions libres et durables sont les meilleures !"
//                 : "Ne vous découragez pas ! L'important est d'apprendre et de progresser."}
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
//             <div className="bg-gradient-to-br from-[#8A3FF7] to-[#2a1a36] rounded-2xl p-4 sm:p-6 border-2 border-[#F6D464]">
//               <div className="text-[#F6D464] text-xs sm:text-sm font-semibold mb-2">VOTRE SCORE</div>
//               <div className="text-4xl sm:text-5xl font-bold text-white">{playerScore}</div>
//             </div>
//             <div className="bg-gradient-to-br from-[#1A84D9] to-[#0057A4] rounded-2xl p-4 sm:p-6 border-2 border-[#1A84D9]">
//               <div className="text-[#1A84D9] text-xs sm:text-sm font-semibold mb-2">BIG TECH</div>
//               <div className="text-4xl sm:text-5xl font-bold text-white">{bigTechScore}</div>
//             </div>
//           </div>

//           <button
//             onClick={resetGame}
//             className="w-full bg-gradient-to-r from-[#F6D464] to-[#F6A55A] hover:from-[#F6A55A] hover:to-[#F37CCF] text-[#1a0b2e] font-bold py-3 sm:py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
//           >
//             Rejouer
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ========== ÉCRAN DE JEU ==========

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] p-4 sm:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-6 sm:mb-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//             <div>
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
//                 Simulateur NIRD
//               </h1>
//               <p className="text-sm sm:text-base text-white/70">
//                 Problème {round + 1} sur {problems.length}
//               </p>
//             </div>
            
//             {/* Scores */}
//             <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
//               <div className="flex-1 sm:flex-none bg-gradient-to-br from-[#8A3FF7] to-[#2a1a36] rounded-xl p-3 sm:p-4 border-2 border-[#F6D464]/50">
//                 <div className="text-[#F6D464] text-xs font-semibold mb-1">VOUS</div>
//                 <div className="text-xl sm:text-2xl font-bold text-white">{playerScore}</div>
//               </div>
//               <div className="flex-1 sm:flex-none bg-gradient-to-br from-[#1A84D9] to-[#0057A4] rounded-xl p-3 sm:p-4 border-2 border-[#1A84D9]/50">
//                 <div className="text-[#1A84D9] text-xs font-semibold mb-1">BIG TECH</div>
//                 <div className="text-xl sm:text-2xl font-bold text-white">{bigTechScore}</div>
//               </div>
//             </div>
//           </div>

//           {/* Problème */}
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-[#F37CCF]/30">
//             <div className="flex flex-col sm:flex-row items-start gap-4">
//               <div className="bg-[#F37CCF]/20 rounded-xl p-3 shrink-0">
//                 <span className="text-2xl">⚠️</span>
//               </div>
//               <div className="min-w-0 flex-1">
//                 <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
//                   {currentProblem.title}
//                 </h2>
//                 <p className="text-sm sm:text-base text-white/80 mb-3">{currentProblem.description}</p>
//                 <p className="text-xs sm:text-sm text-white/60 italic">{currentProblem.context}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Solutions */}
//         <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-6">
//           {currentSolutions.map(solution => (
//             <SolutionCard
//               key={solution.id}
//               solution={solution}
//               isSelected={selectedSolution?.id === solution.id || bigTechSelection?.id === solution.id}
//               isBigTech={bigTechSelection?.id === solution.id}
//               onClick={() => !isAnimating && handleSelectSolution(solution)}
//             />
//           ))}
//         </div>

//         {/* Message */}
//         {message && (
//           <div className="bg-[#F6D464]/20 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-[#F6D464]/50 text-center animate-fade-in mb-6">
//             <p className="text-base sm:text-xl font-bold text-[#F6D464]">{message}</p>
//           </div>
//         )}

//         {/* Explication */}
//         {revealed && selectedSolution && (
//           <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border-2 border-white/20 animate-fade-in">
//             <h3 className="text-base sm:text-lg font-bold text-white mb-2">
//               💡 Explication de votre choix
//             </h3>
//             <p className="text-sm sm:text-base text-white/80">{selectedSolution.explanation}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
