import { clsx } from 'clsx'

interface WordDisplayProps {
  currentWord: string;
  guessedLetters: string[];
  isGameLost: boolean
}

export default function WordDisplay({ currentWord, guessedLetters, isGameLost }: WordDisplayProps) {
  const letterElements = [...currentWord].map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
    const letterStyles = clsx(
      "bg-zinc-700 size-12 border-b border-b-white text-2xl flex justify-center items-center font-semibold",
      isGameLost && !guessedLetters.includes(letter) ? 'text-red-200 underline decoration-wavy' : 'text-white' 
    )
    return (
      <span
	key={index}
	className={letterStyles}
      >
	{shouldRevealLetter ? letter.toUpperCase(): "" }
      </span>
    )
  })
  
  return (
    <section className="flex gap-1">
      {letterElements}
    </section>
  )
}
