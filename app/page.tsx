import Status from '@/app/Status'
import LanguageChips from '@/app/LanguageChips'
import WordDisplay from '@/app/WordDisplay'
import Keyboard from '@/app/Keyboard'

export default function AssemblyEndgame() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Status />
      <LanguageChips />
      <WordDisplay />
      <Keyboard />
      <button
	className="py-2 px-5 bg-sky-400 cursor-pointer border border-sky-300 rounded"
      >New Game</button>
    </main>
  );
}
