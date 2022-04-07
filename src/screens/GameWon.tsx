import React, { useEffect } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { playSound } from '../utils'
import celebrationImageUrl from '../assets/images/celebration.jpeg'
import { useStoreSelector } from '../store/hooks'
import { selectGuessWord } from '../store/gameSliceSelectors'
import Button from '../components/Button'

const GameWon: React.FC = () => {
  const guessWord = useStoreSelector(selectGuessWord)

  useEffect(() => {
    playSound('applause')
  }, [])

  return (
    <Container>
      <Heading>Well done!</Heading>
      <p className="mb-2">You correctly guessed the word:</p>
      <div className="mb-5 text-6xl text-green-800">{guessWord?.word}</div>

      <Button
        className="mb-5"
        onClick={() => window.location.reload()}
        autoFocus
      >
        Play again
      </Button>

      <img
        src={celebrationImageUrl}
        alt="Well done. You guessed the word correctly!"
      />
    </Container>
  )
}

export default GameWon
