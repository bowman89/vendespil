import { useState, useRef } from "react"
import { GameContext } from "./gameContext"
import type { ReactNode } from "react"
import type { gameCard } from "./gameContext"

export function GameProvider({ children }: { children: ReactNode }) {
 const [cards, setCards] = useState<gameCard[]>([])
 const [selectedGameCards, setSelectedGameCards] = useState<gameCard[]>([])
 const [gameCompleted, setGameCompleted] = useState(false)
 const [gameStarted, setGameStarted] = useState(false)
 const [currentPlayer, setCurrentPlayer] = useState(1)
 const [scores, setScores] = useState([0, 0])
 const emojis = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍍", "🍎", "🍐"]
 const nextId = useRef(1)

 function handleClick(card: gameCard) {
  if (selectedGameCards.length === 2) return
  if (card.isFlipped || card.isMatched) return
  setCards(cards.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c)))
  setSelectedGameCards([...selectedGameCards, card])
  if (selectedGameCards.length === 1) {
   CheckForMatch(card)
  }
 }

 function CheckForMatch(card: gameCard) {
  const firstCard = selectedGameCards[0]

  if (firstCard.cardFront === card.cardFront) {
   const updatedCards = cards.map((c) =>
    c.cardFront === card.cardFront ? { ...c, isMatched: true } : c,
   )
   setCards(updatedCards)
   setSelectedGameCards([])

   const newScores = [...scores]
   newScores[currentPlayer - 1] += 1
   setScores(newScores)

   if (updatedCards.every((c) => c.isMatched)) {
    setGameCompleted(true)
   }
  } else {
   setTimeout(() => {
    setCards(
     cards.map((c) =>
      c.id === firstCard.id || c.id === card.id
       ? { ...c, isFlipped: false }
       : c,
     ),
    )
    setSelectedGameCards([])
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
   }, 1000)
  }
 }

 function initializeGame() {
  setGameCompleted(false)
  setSelectedGameCards([])
  setCurrentPlayer(1)
  setScores([0, 0])
  const doubledEmojis = [...emojis, ...emojis]
  const newCards = doubledEmojis.map((emoji, _index) => ({
   id: nextId.current++,
   cardFront: emoji,
   isFlipped: false,
   isMatched: false,
  }))
  const shuffled = [...newCards].sort(() => Math.random() - 0.5)
  setCards(shuffled)
 }

 return (
  <GameContext.Provider
   value={{
    cards,
    setCards,
    selectedGameCards,
    setSelectedGameCards,
    gameCompleted,
    setGameCompleted,
    initializeGame,
    gameStarted,
    setGameStarted,
    handleClick,
    currentPlayer,
    setCurrentPlayer,
    scores,
    setScores,
   }}
  >
   {children}
  </GameContext.Provider>
 )
}
