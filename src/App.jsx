import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello my name is Rubén Peña!! From 2 CFGS</h1>
      <div class="spinner-border" role="status">
        <img src="../assets/img/holasoygerman.png"></img>
      </div>
    </div>
  )
}

export default App
