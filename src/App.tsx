import React from 'react'
import GameWon from './screens/GameWon'
import {
  selectHasGuessedAllLetters,
  selectHasRunOutOfGuesses,
} from './store/gameSliceSelectors'
import { useStoreSelector } from './store/hooks'
import GameActive from './screens/GameActive'
import GameLost from './screens/GameLost'

function App() {
  const hasGuessedAllLetters = useStoreSelector(selectHasGuessedAllLetters)
  const hasRunOutGuesses = useStoreSelector(selectHasRunOutOfGuesses)

  if (hasGuessedAllLetters) return <GameWon />
  if (hasRunOutGuesses) return <GameLost />
  return <GameActive />
}

export default App
