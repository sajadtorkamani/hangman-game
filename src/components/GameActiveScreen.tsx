import React from 'react'
import Letters from './Letters'
import Mask from './Mask'
import ScreenContainer from './ScreenContainer'

const GameActiveScreen: React.FC = () => (
  <ScreenContainer>
    <h1 className="text-3xl mb-5">Hangman</h1>
    <Mask />
    <Letters />
  </ScreenContainer>
)

export default GameActiveScreen
