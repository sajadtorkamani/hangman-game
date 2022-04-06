import React from 'react'
import { selectMask } from '../store/gameSliceSelectors'
import { useAppSelector } from '../store/hooks'

const Mask: React.FC = () => {
  const mask = useAppSelector(selectMask)

  return (
    <div className="mb-8 flex justify-center">
      {mask.map((letter, index) => (
        <div key={index} className="text-[34px] mx-2">
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Mask
