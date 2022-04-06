import React from 'react'
import GuessesRemaining from '../components/GuessesRemaining'
import Letters from '../components/Letters'
import Mask from '../components/Mask'
import Container from '../components/Container'
import Heading from '../components/Heading'

const GameActive: React.FC = () => (
  <Container>
    <Heading>Hangman</Heading>
    <GuessesRemaining />
    <Mask />
    <Letters />
  </Container>
)

export default GameActive
