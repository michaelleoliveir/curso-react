import './App.css'

import { useState, useEffect } from "react";

function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // resgatando dados da API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data)
    }

    fetchData();
    
  }, []);

  // adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R${product.price}</li>
        ))}
      </ul>

      <div className="addProduct">
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} autoComplete='off' />
          </label>
          
          <label>
            Price: 
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} autoComplete='off' />
          </label>

          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    </div>
  )
}

export default App
