import React from 'react'
import Letters from './components/Letters'

function App() {
  return (
    <div>
      <div className="border border-gray-400 max-w-xl mx-auto my-8 text-center">
        <div className="px-4 py-5">
          <h1 className="text-3xl mb-5">Hangman</h1>
          <Letters />
        </div>
      </div>
    </div>
  )
}

export default App
