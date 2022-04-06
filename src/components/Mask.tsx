import React from 'react'
import { selectMask } from '../redux/gameSlice'
import { useAppSelector } from '../redux/hooks'

const Mask: React.FC = () => {
  const mask = useAppSelector(selectMask)

  return (
    <div className="mb-8 flex justify-center">
      {mask.map((letterOrMask) => (
        <div className="text-[34px] mx-2">{letterOrMask}</div>
      ))}
    </div>
  )
}

export default Mask
