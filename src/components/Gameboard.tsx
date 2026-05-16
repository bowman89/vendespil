import { useContext } from "react"
import { GameContext } from "../context/gameContext"
import Card from "./Card"

export default function Gameboard() {
 const {
  cards,
  initializeGame,
  gameStarted,
  setGameStarted,
  handleClick,
  gameCompleted,
  setGameCompleted,
  scores,
  showStartMessage,
  currentPlayer,
 } = useContext(GameContext)

 if (gameStarted !== true) {
  return (
   <div className="flex items-center justify-center">
    <button
     onClick={() => {
      initializeGame()
      setGameStarted(true)
     }}
     className="px-8 py-3 rounded-2xl border-2 border-green-500 text-green-400 text-xl hover:bg-green-500 hover:text-white transition-colors"
    >
     Start new game
    </button>
   </div>
  )
 }

 if (gameCompleted) {
  const winner =
   scores[0] > scores[1]
    ? "Spiller 1"
    : scores[1] > scores[0]
      ? "Spiller 2"
      : "Uafgjort"
  return (
   <div className="flex flex-col items-center gap-4">
    <h2 className="text-4xl font-bold text-green-400">
     {scores[0] === scores[1] ? "🤝 Uafgjort!" : `🎉 ${winner} vinder!`}
    </h2>
    <p className="text-zinc-400">
     {scores[0]} - {scores[1]}
    </p>
    <button
     onClick={() => {
      initializeGame()
      setGameCompleted(false)
     }}
     className="px-8 py-3 rounded-2xl border-2 border-green-500 text-green-400 text-xl hover:bg-green-500 hover:text-white transition-colors"
    >
     Spil igen
    </button>
   </div>
  )
 }

 return (
  <div className="relative">
   {showStartMessage && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-10">
     <div className="bg-zinc-800 border-2 border-green-500 rounded-2xl px-12 py-8 text-center">
      <p className="text-zinc-400 text-sm mb-2">Nu starter</p>
      <p className="text-4xl font-bold text-green-400">
       Spiller {currentPlayer}
      </p>
     </div>
    </div>
   )}
   <div className="grid grid-cols-4 gap-2">
    {cards.map((card) => (
     <Card
      key={card.id}
      cardFront={card.cardFront}
      isFlipped={card.isFlipped}
      isMatched={card.isMatched}
      onClick={() => handleClick(card)}
     />
    ))}
   </div>
  </div>
 )
}
