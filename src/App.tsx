import React from 'react'
import GameWon from './screens/GameWon'
import {
  selectHasGuessedWord,
  selectHasRunOutOfGuesses,
} from './store/gameSliceSelectors'
import { useAppSelector } from './store/hooks'
import GameActive from './screens/GameActive'
import GameLost from './screens/GameLost'

function App() {
  const hasGuessedWord = useAppSelector(selectHasGuessedWord)
  const hasRunOutGuesses = useAppSelector(selectHasRunOutOfGuesses)

  if (hasGuessedWord) return <GameWon />
  if (hasRunOutGuesses) return <GameLost />
  return <GameActive />
}

export default App
