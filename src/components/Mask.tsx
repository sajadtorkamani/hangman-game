import React from 'react'
import { maskSelector } from '../store/gameSliceSelectors'
import { useStoreSelector } from '../store/hooks'

const Mask: React.FC = () => {
  const mask = useStoreSelector(maskSelector)

  return (
    <div className="mb-8 flex flex-wrap justify-center">
      {mask.map((letter, index) => (
        <div key={index} className="text-[34px] mx-2">
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Mask
