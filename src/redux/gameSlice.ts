import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRandomGuessWord } from '../utils'
import { RootState } from './store'

export interface GameState {
  guessWord: string
  correctGuesses: string[]
  incorrectGuesses: string[]
}

const initialState: GameState = {
  guessWord: getRandomGuessWord(),
  correctGuesses: [],
  incorrectGuesses: [],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeGuess: (state, action: PayloadAction<string>) => {
      const guessedLetter = action.payload

      if (state.guessWord.includes(guessedLetter)) {
        state.correctGuesses.push(guessedLetter)
      } else {
        state.incorrectGuesses.push(guessedLetter)
      }
    },
  },
})

export const selectGuessWord = (state: RootState) => state.game.guessWord

export const selectMask = (state: RootState): string[] => {
  const { guessWord, correctGuesses } = state.game

  const mask = guessWord.split('').map((letter) => {
    return correctGuesses.includes(letter) ? letter : '_'
  })

  return mask
}

// Action creators are generated for each case reducer function
export const { makeGuess } = gameSlice.actions

export const gameReducer = gameSlice.reducer
