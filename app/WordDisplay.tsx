'use client'

import { useState } from 'react'

export default function WordDisplay() {
  const [ currentWord, setCurrentWord ] = useState('nextjs')

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
