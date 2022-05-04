import React from 'react'
import { numGuessesRemainingSelector } from '../store/gameSliceSelectors'
import { useStoreSelector } from '../store/hooks'

const GuessesRemaining: React.FC = () => {
  const guessesRemaining = useStoreSelector(numGuessesRemainingSelector)

  return (
    <p className="mb-3">
      Try to guess what the word is. You have{' '}
      <span className="font-bold">{guessesRemaining}</span> guesses remaining.
    </p>
  )
}

export default GuessesRemaining
