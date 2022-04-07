import React from 'react'
import GuessesRemaining from '../components/GuessesRemaining'
import Letters from '../components/Letters'
import Mask from '../components/Mask'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { useGetWordQuery } from '../services/wordApi'
import CategoryHint from '../components/CategoryHint'
import { isDevelopment } from '../utils'

const GameActive: React.FC = () => {
  const { isLoading, data: guessWord } = useGetWordQuery()

  if (isDevelopment() && guessWord) {
    console.log(`Guess word: ${guessWord?.word}`)
  }

  return (
    <Container>
      <Heading>Hangman</Heading>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <GuessesRemaining />
          <CategoryHint />
          <Mask />
          <Letters />
        </>
      )}
    </Container>
  )
}

export default GameActive
