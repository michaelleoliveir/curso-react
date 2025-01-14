import './App.css'

import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import Conditional from './components/Conditional'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

import City from './assets/city.jpg'
import { useState } from 'react'

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", novo: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", novo: false, km: 32423 },
    { id: 3, brand: "Renault", color: "Azul", novo: false, km: 234 }
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [ message, setMessage ] = useState("");

  // função que altera o estado
  const handleMessage = (msg) => {
    setMessage(msg)
  }

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

      <Conditional />

      <ShowUserName name="Michaelle" />

      <CarDetails brand="Toyota" color="Black" km={10000} novo={false} />
      <CarDetails brand="Ford" color="Vermelha" km={4500} novo={false} />
      <CarDetails brand="Fiat" color="branco" km={0} novo={true} />

      { cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          novo={car.novo}
          />
      )) }

      <Fragment propFragment="teste"/>

      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>

      <Container myValue="testing 2">
        <h5>Outro teste</h5>
      </Container>

      <ExecuteFunction myFunction={showMessage}/>

      <Message msg={message}/>

      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  )
}

export default App
