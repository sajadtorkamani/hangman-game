import React from 'react'
import { selectGuessesRemaining } from '../store/gameSliceSelectors'
import { useAppSelector } from '../store/hooks'

const GuessesRemaining: React.FC = () => {
  const guessesRemaining = useAppSelector(selectGuessesRemaining)

  return (
    <p className="mb-3">
      Try to guess what the word is. You have{' '}
      <span className="font-bold">{guessesRemaining}</span> guesses remaining.
    </p>
  )
}

export default GuessesRemaining
