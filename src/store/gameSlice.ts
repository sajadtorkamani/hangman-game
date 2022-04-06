import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCharCount, getRandomGuessWord, playSound } from '../utils'

export interface GameState {
  guessWord: string
  correctGuesses: string[]
  incorrectGuesses: string[]
}

const guessWord = getRandomGuessWord()

// Print for debugging
console.log({ guessWord })

const initialState: GameState = {
  guessWord,
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
        const numOccurrences = getCharCount(guessedLetter, guessWord)

        state.correctGuesses.push(
          ...new Array(numOccurrences).fill(guessedLetter)
        )
        playSound('correct')
      } else {
        state.incorrectGuesses.push(guessedLetter)
        playSound('incorrect')
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { makeGuess } = gameSlice.actions

export const gameReducer = gameSlice.reducer
