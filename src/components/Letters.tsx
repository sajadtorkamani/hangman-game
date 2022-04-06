import React from 'react'
import { makeGuess } from '../redux/gameSlice'
import { useAppDispatch } from '../redux/hooks'
import { getLettersArray } from '../utils'

const Letters: React.FC = () => {
  const letters = getLettersArray()
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-wrap justify-center">
      {letters.map((letter) => (
        <button
          key={letter}
          className="bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded 
    w-10 h-10 m-[3px] text-center text-[18px]"
          onClick={() => dispatch(makeGuess(letter))}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default Letters
