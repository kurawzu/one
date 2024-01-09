import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>S H I T</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ADD 
        </button>

        <h1>{count}</h1>

        <button onClick={() => setCount((count) => count - 1)}>
          SUB 
        </button>
       
      </div>
     
    </>
  )
}

export default App
