import sample from 'lodash/sample'
import applauseSoundUrl from './assets/sounds/applause-sound.mp3'
import crySoundUrl from './assets/sounds/cry-sound.mp3'
import correctSoundUrl from './assets/sounds/correct-sound.mp3'
import incorrectSoundUrl from './assets/sounds/incorrect-sound.mp3'
import { Word } from './types'
import { WORDS } from './words'

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function getLettersArray(): string[] {
  return 'abcdefghijklmnoprstuvwxyz'.split('')
}

export function getCharCount(char: string, str: string): number {
  return (str.match(new RegExp(char, 'gi')) || []).length
}

export function playSound(sound: string): void {
  switch (sound) {
    case 'applause':
      new Audio(applauseSoundUrl).play()
      return
    case 'cry':
      new Audio(crySoundUrl).play()
      return
    case 'correct':
      new Audio(correctSoundUrl).play()
      return
    case 'incorrect':
      new Audio(incorrectSoundUrl).play()
      return
    default:
      throw new Error(`Sound name is not recognized: ${sound}`)
  }
}

export function getGuessWord(): Word {
  const randomCategory = sample(Object.keys(WORDS)) as string
  const randomWord = sample(WORDS[randomCategory]) as string

  return {
    category: randomCategory,
    word: randomWord.toLowerCase(),
  }
}
