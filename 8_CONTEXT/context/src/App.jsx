import './App.css'

import { BrowserRouter, Routes, Route } from "react-router"

import NavBar from './components/NavBar'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Default from './pages/Default'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Default />}/> 
          <Route path="/home" element={<Home />}/> 
          <Route path="/about" element={<About />}/> 
          <Route path="/*" element={<Error />}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
