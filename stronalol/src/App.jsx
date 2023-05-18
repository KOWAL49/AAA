import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://media1.giphy.com/media/J2thcAg6FNq2BkHzSp/giphy.gif?cid=ecf05e47792b2df2942e864311325f1e516c59a444e80010&ep=v1_gifs_gifId&rid=giphy.gif&ct=s" 
        target="_blank">
          <img src="https://media1.giphy.com/media/J2thcAg6FNq2BkHzSp/giphy.gif?cid=ecf05e47792b2df2942e864311325f1e516c59a444e80010&ep=v1_gifs_gifId&rid=giphy.gif&ct=s"
           className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="https://media4.giphy.com/media/pstoKSQRWDxIVjw4Vx/giphy.gif" className="logo react" alt="React logo" />
        </a>
      </div>
     
      <h1>Jakub Kowalczyk </h1>
      <h4>Album 113971</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p >
      
        </p>
      </div>
      <p className="read-the-docs">
      CO JA TU ROBIE LUDZIE 
      </p>
    </>
  )
}

export default App
