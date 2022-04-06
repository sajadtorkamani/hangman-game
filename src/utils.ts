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
