import React from 'react'
import Letters from '../components/Letters'
import Mask from '../components/Mask'
import ScreenContainer from '../components/ScreenContainer'

const GameActiveScreen: React.FC = () => (
  <ScreenContainer>
    <h1 className="text-3xl mb-5">Hangman</h1>
    <Mask />
    <Letters />
  </ScreenContainer>
)

export default GameActiveScreen
