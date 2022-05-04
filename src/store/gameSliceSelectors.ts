import { RootState } from '.'

export const selectGuessWord = (state: RootState) => state.game.guessWord

export const maskSelector = (state: RootState): string[] => {
  const { guessWord, correctGuesses } = state.game
  const mask = guessWord.word.split('').map((letter) => {
    if (letter === ' ') {
      return ' '
    }

    return correctGuesses.includes(letter) ? letter : '_'
  })

  return mask
}

export const hasGuessedAllLettersSelector = (state: RootState): boolean => {
  const { guessWord, correctGuesses } = state.game

  if (guessWord === null) {
    return false
  }

  // The user doesn't have to guess the space characters.
  const guessWordWithoutSpaces = guessWord.word.replaceAll(' ', '')

  return correctGuesses.length === guessWordWithoutSpaces.length
}

export const hasRunOutOfGuessesSelector = (state: RootState): boolean => {
  const guessesRemaining = numGuessesRemainingSelector(state)
  return guessesRemaining <= 0
}

export const lettersGuessedSelector = (state: RootState): string[] => {
  const { correctGuesses, incorrectGuesses } = state.game

  return [...correctGuesses, ...incorrectGuesses]
}

export const numGuessesRemainingSelector = (state: RootState): number => {
  const NUM_GUESSES_ALLOWED = 6
  return NUM_GUESSES_ALLOWED - state.game.incorrectGuesses.length
}
