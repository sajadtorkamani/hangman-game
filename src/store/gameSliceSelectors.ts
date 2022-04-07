import { RootState } from '.'
import { settings } from '../settings'

export const selectGuessWord = (state: RootState) => state.game.guessWord

export const selectMask = (state: RootState): string[] => {
  const { guessWord, correctGuesses } = state.game

  if (!guessWord) {
    throw new Error('Tried accessing guess word before it was initialized.')
  }

  const mask = guessWord.word.split('').map((letter) => {
    if (letter === ' ') {
      return ' '
    }

    return correctGuesses.includes(letter) ? letter : '_'
  })

  return mask
}

export const selectHasGuessedWord = (state: RootState): boolean => {
  const { guessWord, correctGuesses } = state.game

  if (guessWord === null) {
    return false
  }

  // The user doesn't have to guess the space characters.
  const guessWordWithoutSpaces = guessWord.word.replaceAll(' ', '')
  
  return correctGuesses.length === guessWordWithoutSpaces.length
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
