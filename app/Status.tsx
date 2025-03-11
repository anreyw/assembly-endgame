import { clsx } from 'clsx'

interface StatusProps {
  isGameWon: boolean;
  isGameLost: boolean;
}

export default function Status({ isGameWon, isGameLost }: StatusProps) {
  const statusStyles = clsx("flex flex-col justify-center items-center w-full h-16 text-white rounded", {
    'bg-green-600': isGameWon,
    'bg-red-600': isGameLost
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
    }
  }
  
  return (
    <section className={statusStyles}>
      {renderGameStatus()}
    </section>
  )
}
