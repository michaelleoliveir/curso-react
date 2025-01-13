import { useState } from "react"

function Conditional() {

    const [x] = useState(false)

    const [name, setName] = useState("João")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            { x && <p>Se x for true, SIM!</p> }
            { !x && <p>Agora o x é falso</p> }

            <h1>IF Ternário</h1>
            {name === "João" ? (
                <div>
                    <p>O nome é JOÃO</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
            <button onClick={() => setName("Matheus")}>Clica aqui!</button>
        </div>
    )
}

export default Conditional