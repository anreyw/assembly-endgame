import { clsx } from 'clsx'

interface KeyboardProps {
  currentWord: string;
  guessedLetters: string[];
  handleClick: (letter: string) => void
}

export default function Keyboard({ currentWord, guessedLetters, handleClick }: KeyboardProps) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const keyboardEl = alphabet.map(letter => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    
    const buttonStyles = clsx(
      "size-10 rounded border border-amber-100 cursor-pointer",
      {
	'bg-yellow-300': !isGuessed,
	'bg-green-400': isCorrect,
	'bg-red-400': isWrong
      }
    )
    
    return (
    <button
      key={letter}
      className={buttonStyles}
      onClick={() => handleClick(letter)}
    >
      {letter.toUpperCase()}
    </button>      
    )
  })
  
  return (
    <section className="flex flex-wrap justify-center gap-2 max-w-md">
      {keyboardEl}
    </section>
  )
}
