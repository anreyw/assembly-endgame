import Status from '@/app/Status'
import LanguageChips from '@/app/LanguageChips'
import WordDisplay from '@/app/WordDisplay'

export default function AssemblyEndgame() {
  return (
    <main className="flex flex-col items-center gap-4">
      <Status />
      <LanguageChips />
      <WordDisplay />
    </main>
  );
}
