import React, { useEffect } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Heading from '../components/Heading'
import sadnessImageUrl from '../assets/images/sadness.jpeg'
import { selectGuessWord } from '../store/gameSliceSelectors'
import { useStoreSelector } from '../store/hooks'
import { playSound } from '../utils'

const GameLost: React.FC = () => {
  const guessWord = useStoreSelector(selectGuessWord)

  useEffect(() => {
    playSound('cry')
  }, [])

  return (
    <Container>
      <Heading>Unlucky!</Heading>
      <p className="mb-2">You've run out of guesses. The correct word was:</p>
      <div className="mb-5 text-6xl text-red-800">{guessWord?.word}</div>

      <Button
        className="mb-5"
        onClick={() => window.location.reload()}
        autoFocus
      >
        Play again
      </Button>

      <img src={sadnessImageUrl} alt="Unlucky. You run out of guesses" />
    </Container>
  )
}

export default GameLost
