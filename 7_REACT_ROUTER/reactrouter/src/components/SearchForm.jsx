import { useNavigate } from "react-router";
import { useState } from "react"; 

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/search?name=" + query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                <input type="submit" value="Buscar"/>
            </form>
        </div>
    )
}

export default SearchForm