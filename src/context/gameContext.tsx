/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react"

export type gameCard = {
 id: number
 cardFront: string
 isFlipped: boolean
 isMatched: boolean
}

export const GameContext = createContext({
 cards: [] as gameCard[],
 setCards: (value: gameCard[]) => {},
 selectedGameCards: [] as gameCard[],
 setSelectedGameCards: (value: gameCard[]) => {},
 gameCompleted: false,
 setGameCompleted: (value: boolean) => {},
 initializeGame: () => {},
 gameStarted: false,
 setGameStarted: (value: boolean) => {},
 handleClick: (card: gameCard) => {},
})
