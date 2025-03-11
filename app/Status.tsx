import { clsx } from 'clsx'

interface StatusProps {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  isLastGuessWrong: boolean
}

export default function Status({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessWrong
}: StatusProps) {
  const statusStyles = clsx("flex flex-col justify-center items-center w-full h-16 text-white rounded", {
    'bg-green-600': isGameWon,
    'bg-red-600': isGameLost,
    'bg-purple-700': isLastGuessWrong
  })
  
  function renderGameStatus() {
    if (isGameWon) {
      return (
	<>
	  <h2 className="font-bold text-xl">YOU WON</h2>
	  <p>You saved the world from Assembly 🎉</p>
	</>
      )
    } else if (isGameLost) {
      return (
	<>
	  <h2 className="font-bold text-xl">YOU LOSE</h2>
	  <p>Better start learning Assembly 😭</p>
	</>
      )      	
    } else if (!isGameOver && isLastGuessWrong) {
      return (
	<>
	  <p>Wrong answer.</p>
	</>
      )
    }
    
    return null
  }
  
  return (
    <section className={statusStyles}>
      {renderGameStatus()}
    </section>
  )
}
