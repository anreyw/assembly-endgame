'use client'

import { useState } from 'react'
import Confetti from 'react-confetti'
import Status from '@/app/Status'
import LanguageChips from '@/app/LanguageChips'
import WordDisplay from '@/app/WordDisplay'
import Keyboard from '@/app/Keyboard'
import { languages } from '@/app/languages'
import { getRandomWord } from '@/app/utils'

export default function AssemblyEndgame() {
  
  // State Values
  const [ currentWord, setCurrentWord ] = useState(getRandomWord)
  const [ guessedLetters, setGuessedLetters ] = useState<string[]>([])

  // Derived Values
  const wrongGuessCount: number =
    guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon =
    [...currentWord].every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessWrong = guessedLetters.length != 0 &&
    !currentWord.includes(lastGuessedLetter)

  // Helper Functions
  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev: string[]) =>
      prev.includes(letter) ?  prev : [...prev, letter]
    )
  }

  function startNewGame() {
    setCurrentWord(getRandomWord)
    setGuessedLetters([])
  }

  // Page Render
  return (
    <main className="flex flex-col items-center gap-4">
      {isGameWon &&
	<Confetti
	  recycle={false}
	  gravity={.2}
	/>
      }
      <Status
	isGameWon={isGameWon}
	isGameLost={isGameLost}
	isGameOver={isGameOver}
	isLastGuessWrong={isLastGuessWrong}
	wrongGuessCount={wrongGuessCount}
      />
      <LanguageChips wrongGuessCount={wrongGuessCount} />
      <WordDisplay
	currentWord={currentWord}
	guessedLetters={guessedLetters}
	isGameLost={isGameLost}
      />
      <Keyboard
	isGameOver={isGameOver}
	currentWord={currentWord}
	guessedLetters={guessedLetters}
	handleClick={addGuessedLetter}
      />
      {isGameOver &&
	<button
	  className="py-2 px-5 bg-sky-400 cursor-pointer border border-sky-300 rounded"
	  onClick={startNewGame}
	>
	   New Game
	</button>
      }
    </main>
  );
}
