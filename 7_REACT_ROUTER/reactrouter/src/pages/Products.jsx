import { useParams, Link } from "react-router"
import { useFetch } from "../hooks/useFetch";

const Products = () => {
    const { id } = useParams(); 

    // carregando o dado individual
    const url = `http://localhost:3000/products/${id}`
    const {data: product, error, loading} = useFetch(url);

    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando dados...</p> }
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    <Link to={`/products/${id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    )
}

export default Products