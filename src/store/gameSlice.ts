import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { wordApi } from '../services/wordApi'
import { Word } from '../types'
import { getCharCount, playSound } from '../utils'

export interface GameState {
  guessWord: Word | null
  correctGuesses: string[]
  incorrectGuesses: string[]
}

const initialState: GameState = {
  guessWord: null,
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
  extraReducers: (builder) => {
    builder.addMatcher(
      wordApi.endpoints.getWord.matchFulfilled,
      (state, { payload }) => {
        state.guessWord = payload
      }
    )
  },
})

// Action creators are generated for each case reducer function
export const { makeGuess } = gameSlice.actions

export const gameReducer = gameSlice.reducer
