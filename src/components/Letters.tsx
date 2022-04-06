import React from 'react'
import { makeGuess } from '../store/gameSlice'
import { selectLettersGuessed } from '../store/gameSliceSelectors'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getLettersArray } from '../utils'

const Letters: React.FC = () => {
  const letters = getLettersArray()
  const dispatch = useAppDispatch()
  const lettersGuessed = useAppSelector(selectLettersGuessed)

  return (
    <div className="flex flex-wrap justify-center">
      {letters.map((letter) => {
        const isAlreadyGuessed = lettersGuessed.includes(letter)

        return (
          <button
            key={letter}
            className="bg-gray-100 hover:bg-gray-200 border border-gray-400 rounded 
    w-10 h-10 m-[3px] text-center text-[18px] disabled:bg-gray-300 disabled:cursor-default"
            disabled={isAlreadyGuessed}
            onClick={() => dispatch(makeGuess(letter))}
          >
            {letter}
          </button>
        )
      })}
    </div>
  )
}

export default Letters
