export default function Keyboard() {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const keyboardEl = alphabet.map(letter => (
    <button
      key={letter}
      className="size-10 bg-yellow-300 rounded border border-amber-100"
    >
      {letter.toUpperCase()}
    </button>
  ))
  
  return (
    <section className="flex flex-wrap justify-center gap-2 max-w-md">
      {keyboardEl}
    </section>
  )
}
