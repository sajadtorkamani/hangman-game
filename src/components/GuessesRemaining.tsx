import React from 'react'
import { selectGuessesRemaining } from '../store/gameSliceSelectors'
import { useAppSelector } from '../store/hooks'

const GuessesRemaining: React.FC = () => {
  const guessesRemaining = useAppSelector(selectGuessesRemaining)

  return (
    <div className="mb-3">
      You have <span className="font-bold text-lg">{guessesRemaining}</span>{' '}
      guesses remaining.
    </div>
  )
}

export default GuessesRemaining
