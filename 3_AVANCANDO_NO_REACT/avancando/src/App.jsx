import './App.css'

import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

import City from './assets/city.jpg'

function App() {
  return (
    <div>
      <h1>Conceitos Avançados</h1>

      {/* {Inserindo a imagem da pasta PUBLIC => direto pela barra} */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Inserindo a imagem da pasta ASSETS => ela precisa ser importada */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
    </div>
  )
}

export default App
