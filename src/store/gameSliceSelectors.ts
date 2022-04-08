import { RootState } from '.'

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

export const selectHasGuessedAllLetters = (state: RootState): boolean => {
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
  const NUM_GUESSES_ALLOWED = 6
  return NUM_GUESSES_ALLOWED - state.game.incorrectGuesses.length
}
