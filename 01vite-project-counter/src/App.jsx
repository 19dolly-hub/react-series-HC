import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        <h3>Count is {count}</h3>

        <button onClick={() => {
          if(count < 5) {
            setCount(count + 1)
          } 
        }}>
          count + + 
        </button>''''

        <button onClick = {() => {
          if(count > 0) {
            setCount(count - 1)
          }
        }}>
          count - -
        </button>

        <p>Interview Question:</p>

        <button onClick={() => {
          if(count < 5) {
            setCount(count + 1)
            setCount(count + 1)
            setCount(count + 1)
          } 
        }}>
          3*setCount(count + 1)
        </button>''''

        <button onClick={() => {
          if(count < 15) {
            setCount(counts => counts + 1)
            setCount(counts => counts + 1)
            setCount(counts => counts + 1)
          } 
        }}>
          3*setCount(counts =&gt; counts + 1)
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
