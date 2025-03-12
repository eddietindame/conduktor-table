import { useState } from 'react'
import viteLogo from '/vite.svg'

import reactLogo from '../assets/react.svg'
import { cn } from '../lib/utils'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col gap-2">
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="flex flex-col gap-4 p-8">
        <button
          onClick={() => setCount(count => count + 1)}
          className={cn('bg-[#1a1a1a]', count > 10 && 'bg-red-500')}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}
