import React from 'react'
import { guessWordSelector } from '../store/gameSliceSelectors'
import { useStoreSelector } from '../store/hooks'

const CategoryHint: React.FC = () => {
  const guessWord = useStoreSelector(guessWordSelector)

  return <p className="text-gray-600 text-sm">Hint: {guessWord?.category}</p>
}

export default CategoryHint
