interface WordDisplayProps {
  currentWord: string
}

export default function WordDisplay({ currentWord }: WordDisplayProps) {
  const letterElements = [...currentWord].map((letter, index) => (
    <span
      key={index}
      className="text-white bg-zinc-700 py-2 px-4 border-b border-b-white text-lg"
    >
      {letter.toUpperCase()}
    </span>
  ))
  
  return (
    <section className="flex gap-1">
      {letterElements}
    </section>
  )
}
