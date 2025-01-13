import './App.css'

import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import Conditional from './components/Conditional'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

import City from './assets/city.jpg'

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", novo: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", novo: false, km: 32423 },
    { id: 3, brand: "Renault", color: "Azul", novo: false, km: 234 }
  ]

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
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          novo={car.novo}
          />
      )) }
    </div>
  )
}

export default App
