import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRandomGuessWord } from '../utils'

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
      const { guessWord } = state
      const guessedLetter = action.payload

      if (guessWord.includes(guessedLetter)) {
        const numOccurrences = (
          guessWord.match(new RegExp(guessedLetter, 'gi')) || []
        ).length

        state.correctGuesses.push(
          ...new Array(numOccurrences).fill(guessedLetter)
        )
      } else {
        state.incorrectGuesses.push(guessedLetter)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { makeGuess } = gameSlice.actions

export const gameReducer = gameSlice.reducer
