import { createSelector } from 'reselect'
import { RootState } from './store'

export const selectGuessWord = (state: RootState) => state.game.guessWord

export const selectMask = (state: RootState): string[] => {
  const { guessWord, correctGuesses } = state.game

  const mask = guessWord.split('').map((letter) => {
    return correctGuesses.includes(letter) ? letter : '_'
  })

  return mask
}

export const selectHasGuessedWord = (state: RootState): boolean => {
  const { guessWord, correctGuesses } = state.game

  return correctGuesses.length === guessWord.length
}

export const selectLettersGuessed = (state: RootState): string[] => {
  const { correctGuesses, incorrectGuesses } = state.game

  return [...correctGuesses, ...incorrectGuesses]
}
