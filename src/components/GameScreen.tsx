import React from 'react'
import Letters from './Letters'
import Mask from './Mask'

const GameScreen: React.FC = () => (
  <div className="border border-gray-400 max-w-xl mx-auto my-8 text-center">
    <div className="px-4 py-5">
      <h1 className="text-3xl mb-5">Hangman</h1>
      
      <Mask />
      <Letters />
    </div>
  </div>
)

export default GameScreen
