import { useState } from "react"
import { GameContext } from "./gameContext"
import type { ReactNode } from "react"
import type { gameCard } from "./gameContext"

export function GameProvider({ children }: { children: ReactNode }) {
 const [cards, setCards] = useState<gameCard[]>([])
 const [selectedGameCards, setSelectedGameCards] = useState<gameCard[]>([])
 const [gameCompleted, setGameCompleted] = useState(false)
 const emojis = ["🍇", "🍈", "🍉", "🍊", "🍋‍🟩", "🍍", "🍎", "🍐"]
 const [gameStarted, setGameStarted] = useState(false)

 function handleClick(card: gameCard) {
  if (selectedGameCards.length === 2) return
  if (card.isFlipped || card.isMatched) return
  setCards(
   cards.map((c) => {
    if (c.id === card.id) {
     return { ...c, isFlipped: true }
    }
    return c
   }),
  )
  setSelectedGameCards([...selectedGameCards, card])
  if (selectedGameCards.length === 1) {
   CheckForMatch(card)
  }
 }

 function CheckForMatch(card: gameCard) {
  const firstCard = selectedGameCards[0]

  if (firstCard.cardFront === card.cardFront) {
   setCards(
    cards.map((c) => {
     if (c.cardFront === card.cardFront) {
      return { ...c, isMatched: true }
     }
     return c
    }),
   )
   setSelectedGameCards([])
   if (firstCard.cardFront === card.cardFront) {
    const updatedCards = cards.map((c) => {
     if (c.cardFront === card.cardFront) {
      return { ...c, isMatched: true }
     }
     return c
    })

    setCards(updatedCards)
    setSelectedGameCards([])

    if (updatedCards.every((c) => c.isMatched)) {
     setGameCompleted(true)
    }
   }
  } else {
   setTimeout(() => {
    setCards(
     cards.map((c) => {
      if (c.id === firstCard.id || c.id === card.id) {
       return { ...c, isFlipped: false }
      }
      return c
     }),
    )
    setSelectedGameCards([])
   }, 1000)
  }
 }

 function initializeGame() {
  setGameCompleted(false)
  setSelectedGameCards([])
  const doubledEmojis = [...emojis, ...emojis]

  const newCards = doubledEmojis.map((emoji, index) => ({
   id: index,
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
   }}
  >
   {children}
  </GameContext.Provider>
 )
}
