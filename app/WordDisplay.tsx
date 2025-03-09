interface WordDisplayProps {
  currentWord: string;
  guessedLetters: string[]
}

export default function WordDisplay({ currentWord, guessedLetters }: WordDisplayProps) {
  const letterElements = [...currentWord].map((letter, index) => (
    <span
      key={index}
      className="text-white bg-zinc-700 size-12 border-b border-b-white text-2xl flex justify-center items-center font-semibold"
    >
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ))
  
  return (
    <section className="flex gap-1">
      {letterElements}
    </section>
  )
}
