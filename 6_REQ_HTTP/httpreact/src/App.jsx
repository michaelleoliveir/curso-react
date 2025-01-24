import './App.css'

import { useState, useEffect } from "react";
import { useFetch } from './hooks/useFetch';

function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { data: items, httpConfig, loading, error } = useFetch(url)

  // resgatando dados da API
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data)
  //   }

  //   fetchData();
    
  // }, []);

  // adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST")

    // deixando vazio os inputs
    setName("");
    setPrice("");
  }

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((item) => (
          <li key={item.id}>{item.name} - R${item.price}</li>
        ))}
      </ul>
      )}

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

          {/* some o botão quando estiver carregando os dados */}
          {!loading && (
            <input type="submit" value={"Enviar"} />
          )}
          {loading && (
            <input type="submit" value={"Aguarde"} disabled="on" />
          )}
        </form>
      </div>
    </div>
  )
}

export default App
