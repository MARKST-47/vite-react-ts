import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='py-10 h-screen'>
      <h1 className='font-bold text-3xl text-center'>
        Your Todos
      </h1>
    </main>
  )
}

export default App
