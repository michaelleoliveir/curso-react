import './App.css'

import MyComponent from './components/MyComponent'

function App() {
  
  return (
    <div className='App'>
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>

      <p style={{color: "blue", padding: "25px", borderTop: "6px solid red"}}>Este elemento foi estilizado de forma Inline</p>
    </div>
  )
}

export default App
