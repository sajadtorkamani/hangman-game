import React from 'react'
import { selectGuessWord } from '../store/gameSliceSelectors'
import { useAppSelector } from '../store/hooks'

const CategoryHint: React.FC = () => {
  const guessWord = useAppSelector(selectGuessWord)

  return <p className="text-gray-600 text-sm">Hint: {guessWord?.category}</p>
}

export default CategoryHint
