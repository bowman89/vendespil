import { useContext } from "react"
import { GameContext } from "../context/gameContext"

export default function Header() {
 const { scores, currentPlayer, gameStarted, gameCompleted, wins } =
  useContext(GameContext)

 return (
  <div className="flex flex-row items-center justify-between w-full">
   <div
    className={`flex flex-col items-center px-4 py-2 rounded-xl border-2 ${
     gameCompleted && scores[0] > scores[1]
      ? "border-green-500 text-green-400"
      : !gameCompleted && gameStarted && currentPlayer === 1
        ? "border-green-500 text-green-400"
        : "border-zinc-700 text-zinc-400"
    }`}
   >
    <p className="text-sm">Spiller 1</p>
    <p className="text-2xl font-bold">{scores[0]}</p>
    <p className="text-xs text-zinc-500">{wins[0]} sejre</p>
   </div>

   <div className="flex flex-col items-center gap-1">
    <h1 className="text-4xl font-bold text-zinc-100 tracking-wide">Memory</h1>
    <p className="text-zinc-400 text-sm">Find alle par for at vinde</p>
   </div>

   <div
    className={`flex flex-col items-center px-4 py-2 rounded-xl border-2 ${
     gameCompleted && scores[1] > scores[0]
      ? "border-green-500 text-green-400"
      : !gameCompleted && gameStarted && currentPlayer === 2
        ? "border-green-500 text-green-400"
        : "border-zinc-700 text-zinc-400"
    }`}
   >
    <p className="text-sm">Spiller 2</p>
    <p className="text-2xl font-bold">{scores[1]}</p>
    <p className="text-xs text-zinc-500">{wins[1]} sejre</p>
   </div>
  </div>
 )
}
