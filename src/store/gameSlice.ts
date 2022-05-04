import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Word } from '../types'
import { getCharCount, getGuessWord, playSound } from '../utilities'

export interface GameState {
  guessWord: Word
  correctGuesses: string[]
  incorrectGuesses: string[]
}

const initialState: GameState = {
  guessWord: getGuessWord(),
  correctGuesses: [],
  incorrectGuesses: [],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeGuess: (state, action: PayloadAction<string>) => {
      const guessWord = state.guessWord
      const guessedLetter = action.payload

      if (guessWord === null) {
        throw new Error('Guess word not initialized yet.')
      }

      if (guessWord.word.includes(guessedLetter)) {
        const numOccurrences = getCharCount(guessedLetter, guessWord.word)
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
