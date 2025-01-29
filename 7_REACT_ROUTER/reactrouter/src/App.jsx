import './App.css';

// config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import  Home from "./pages/Home";
import  About  from "./pages/About";
import Products from './pages/Products';
import Info from './pages/Info';

// components
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* inserindo o componente de navbar dentro do App */}
        <Navbar />

        {/* inserindo as rotas presentes no projeto */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products/:id' element={<Products />}/>
          <Route path='/products/:id/info' element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
