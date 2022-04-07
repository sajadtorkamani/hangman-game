import React from 'react'
import GuessesRemaining from '../components/GuessesRemaining'
import Letters from '../components/Letters'
import Mask from '../components/Mask'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { useGetWordQuery } from '../services/wordApi'

const GameActive: React.FC = () => {
  // On load, fetch word from API
  const { data, error, isLoading } = useGetWordQuery()

  console.log({ data })

  return (
    <Container>
      <Heading>Hangman</Heading>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <GuessesRemaining />
          <Mask />
          <Letters />
        </>
      )}
    </Container>
  )
}

export default GameActive
