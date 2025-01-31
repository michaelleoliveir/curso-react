// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext.jsx"
// import ChangeCounter from "../components/ChangeCounter.jsx";

import { useCounterContext } from "../hooks/useCounterContext.jsx"
import { useTitleContext } from "../hooks/useTitleContext.jsx";

import ChangeCounter from "../components/ChangeCounter.jsx"

const Home = () => {
    // const { counter } = useContext(CounterContext)
    const {counter} = useCounterContext();
    const {color, dispatch} = useTitleContext();

    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <div>
            <h1 style={{color: color}}>Página Principal</h1>
            <p>O valor do contador é de {counter}</p>
            {/* alterando valor contexto */}
            <ChangeCounter />

            <div style={{padding:"20px"}}>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
}

export default Home