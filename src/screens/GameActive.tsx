import React from 'react'
import GuessesRemaining from '../components/GuessesRemaining'
import Letters from '../components/Letters'
import Mask from '../components/Mask'
import Container from '../components/Container'
import Heading from '../components/Heading'
import CategoryHint from '../components/CategoryHint'
import { isDevelopment } from '../utils'

const GameActive: React.FC = () => {
  const guessWord = 'Sajad'

  if (isDevelopment()) {
    console.log(`Guess word: ${guessWord}`)
  }

  return (
    <Container>
      <Heading>Hangman</Heading>

      <GuessesRemaining />
      <CategoryHint />
      <Mask />
      <Letters />
    </Container>
  )
}

export default GameActive
