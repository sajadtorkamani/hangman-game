import React from 'react'
import { getLettersArray } from '../utils'

const Letters: React.FC = () => {
  const letters = getLettersArray()

  return (
    <div className="flex flex-wrap justify-center">
      {letters.map((letter) => (
        <button
          key={letter}
          className="bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded 
    w-10 h-10 m-[3px] text-center text-[18px]"
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default Letters
