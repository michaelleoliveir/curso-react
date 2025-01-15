import { useState } from 'react';

import './App.css'

import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = true;
  
  return (
    <div className='App'>
      <h1>React com CSS</h1>

      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>

      {/* estilização inline */}
      <p style={{color: "blue", padding: "25px", borderTop: "6px solid red"}}>Este elemento foi estilizado de forma Inline</p>

      {/* estilizacao utilizando o if ternário */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}) : null}>CSS Dinâmico</h2>

      {/* estilização com classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* css modules */}
      <Title />
    </div>
  )
}

export default App
