import correctSoundMp3Url from './assets/sounds/correct-sound.mp3'
import incorrectSoundMp3Url from './assets/sounds/incorrect-sound.mp3'

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

export function playSound(type: 'correct' | 'incorrect') {
  const audio = type === 'correct' ? correctSoundMp3Url : incorrectSoundMp3Url
  new Audio(audio).play()
}
