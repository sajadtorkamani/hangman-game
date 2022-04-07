import { RootState } from '.'
import { settings } from '../settings'

export const selectGuessWord = (state: RootState) => state.game.guessWord

export const selectMask = (state: RootState): string[] => {
  const guessWord = state.game.guessWord
  const correctGuesses = state.game.correctGuesses

  if (!guessWord) {
    throw new Error('Guess word not initialized yet.')
  }

  const mask = guessWord.word.split('').map((letter) => {
    return correctGuesses.includes(letter) ? letter : '_'
  })

  return mask
}

export const selectHasGuessedWord = (state: RootState): boolean => {
  const { guessWord: word, correctGuesses } = state.game

  return word !== null && correctGuesses.length === word.word.length
}

export const selectHasRunOutOfGuesses = (state: RootState): boolean => {
  const guessesRemaining = selectGuessesRemaining(state)
  return guessesRemaining <= 0
}

export const selectLettersGuessed = (state: RootState): string[] => {
  const { correctGuesses, incorrectGuesses } = state.game

  return [...correctGuesses, ...incorrectGuesses]
}

export const selectGuessesRemaining = (state: RootState): number => {
  return settings.numGuessesAllowed - state.game.incorrectGuesses.length
}
