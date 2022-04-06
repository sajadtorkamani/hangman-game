import React from 'react'
import GameWonScreen from './components/GameWonScreen'
import { selectHasGuessedWord } from './redux/gameSliceSelectors'
import { useAppSelector } from './redux/hooks'
import GameActiveScreen from './components/GameActiveScreen'

function App() {
  const hasGuessedWord = useAppSelector(selectHasGuessedWord)

  if (hasGuessedWord) {
    return <GameWonScreen />
  }

  return <GameActiveScreen />
}

export default App
