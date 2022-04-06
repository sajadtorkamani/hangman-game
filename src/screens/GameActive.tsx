import React from 'react'
import GuessesRemaining from '../components/GuessesRemaining'
import Letters from '../components/Letters'
import Mask from '../components/Mask'
import Container from '../components/Container'

const GameActiveScreen: React.FC = () => (
  <Container>
    <h1 className="text-3xl mb-5">Hangman</h1>
    <GuessesRemaining />
    <Mask />
    <Letters />
  </Container>
)

export default GameActiveScreen
