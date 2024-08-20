import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-4 text-blue-500">Vite + React</h1>
      <div className="card p-4 mt-4 border rounded-lg shadow-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-500">
          Edit <code className="text-red-500">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-4 text-green-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
