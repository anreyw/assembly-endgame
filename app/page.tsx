'use client'

import { useState } from 'react'
import Status from '@/app/Status'
import LanguageChips from '@/app/LanguageChips'
import WordDisplay from '@/app/WordDisplay'
import Keyboard from '@/app/Keyboard'

export default function AssemblyEndgame() {
  const [ currentWord, setCurrentWord ] = useState('nextjs')
  const [ guessedLetters, setGuessedLetters ] = useState<string[]>([])

  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev: string[]) =>
      prev.includes(letter) ?  prev : [...prev, letter]
    )
  }
  
  return (
    <main className="flex flex-col items-center gap-4">
      <Status />
      <LanguageChips />
      <WordDisplay currentWord={currentWord} />
      <Keyboard
	currentWord={currentWord}
	guessedLetters={guessedLetters}
	handleClick={addGuessedLetter}
      />
      <button
	className="py-2 px-5 bg-sky-400 cursor-pointer border border-sky-300 rounded"
      >New Game</button>
    </main>
  );
}
