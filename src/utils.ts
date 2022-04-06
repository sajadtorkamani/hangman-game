import applauseSoundUrl from './assets/sounds/applause-sound.mp3'
import crySoundUrl from './assets/sounds/cry-sound.mp3'
import correctSoundUrl from './assets/sounds/correct-sound.mp3'
import incorrectSoundUrl from './assets/sounds/incorrect-sound.mp3'

export function getRandomGuessWord(): string {
  const words = ['apple', 'banana', 'orange', 'kiwi', 'mango', 'carrot']
  const randomIndex = Math.floor(Math.random() * words.length)

  return words[randomIndex]
}

export function getLettersArray(): string[] {
  return 'abcdefghijklmnoprstuvwxyz'.split('')
}

export function getCharCount(char: string, str: string): number {
  return (str.match(new RegExp(char, 'gi')) || []).length
}

export function playSound(sound: string) {
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
