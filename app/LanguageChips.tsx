import { languages } from '@/app/languages.js'

export default function LanguageChips() {
  const languageEls = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span
	key={lang.name}
	style={styles}
	className="py-1 px-2 rounded"
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
