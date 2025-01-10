import { useState } from "react"

const ListRender = () => {

    const [ list ] = useState(["Matheus", "Pedro", "Josias", "Maria"])

    const [ users ] = useState([
        {id: 1, name: "Michaelle", age: 21},
        {id: 213910, name: "Matheus", age: 31},
        {id: 9032193, name: "Pedro", age: 44}
    ])

    return (
        <div>
            {/* jeito menos indicado para obter uma key */}
            <ul>
                {list.map((nome, index) => (
                    <li key={index}>{nome}</li>
                ))}
            </ul>

            {/* jeito MAIS indicado para obter uma key */}
            <ul>
                {users.map((usuario) => (
                    <li key={usuario.id}>{usuario.name} - {usuario.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender