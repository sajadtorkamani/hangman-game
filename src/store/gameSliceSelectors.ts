import { RootState } from '.'

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

const NUM_GUESSES_ALLOWED = 5

export const selectGuessesRemaining = (state: RootState): number => {
  return NUM_GUESSES_ALLOWED - state.game.incorrectGuesses.length
}
