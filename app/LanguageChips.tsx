import { clsx } from 'clsx'
import { languages } from '@/app/languages'

interface LanguageChipsProps {
  wrongGuessCount: number
}

export default function LanguageChips(
  { wrongGuessCount }: LanguageChipsProps
) {  
  const languageEls = languages.map((lang, index) => {
    const isLangLost = index < wrongGuessCount
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span
	key={lang.name}
	style={styles}
	className={
	  clsx("relative py-1 px-2 rounded",
	    isLangLost && "opacity-25 before:absolute before:inset-0 before:flex before:justify-center before:items-center before:content-['💀']"
	  )
	}
      >
	{lang.name}
      </span>
    )
  })
  
  return (
    <section className="flex flex-wrap justify-center gap-2 max-w-md">
      {languageEls}
    </section>
  )
}
