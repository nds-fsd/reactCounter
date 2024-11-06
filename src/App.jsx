import { useState } from 'react'
import './App.css'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
