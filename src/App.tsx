import React from 'react'
import GameWonScreen from './screens/GameWonScreen'
import { selectHasGuessedWord } from './store/gameSliceSelectors'
import { useAppSelector } from './store/hooks'
import GameActiveScreen from './screens/GameActiveScreen'

function App() {
  const hasGuessedWord = useAppSelector(selectHasGuessedWord)

  if (hasGuessedWord) {
    return <GameWonScreen />
  }

  return <GameActiveScreen />
}

export default App
