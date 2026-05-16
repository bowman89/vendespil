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
 setCards: (_value: gameCard[]) => {},
 selectedGameCards: [] as gameCard[],
 setSelectedGameCards: (_value: gameCard[]) => {},
 gameCompleted: false,
 setGameCompleted: (_value: boolean) => {},
 initializeGame: () => {},
 gameStarted: false,
 setGameStarted: (_value: boolean) => {},
 handleClick: (_card: gameCard) => {},
 currentPlayer: 1,
 setCurrentPlayer: (_value: number) => {},
 scores: [0, 0],
 setScores: (_value: number[]) => {},
 wins: [0, 0],
 setWins: (_value: number[]) => {},
 showStartMessage: false,
 setShowStartMessage: (_value: boolean) => {},
})
