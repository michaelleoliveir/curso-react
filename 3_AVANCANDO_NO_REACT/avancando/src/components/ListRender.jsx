import { useState } from "react"

const ListRender = () => {

    const deleteRandom = () => {
        const randomNum = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((users) => randomNum !== users.id)
        })
    }

    const [ list ] = useState(["Matheus", "Pedro", "Josias", "Maria"])

    const [ users, setUsers ] = useState([
        {id: 1, name: "Michaelle", age: 21},
        {id: 2, name: "Matheus", age: 31},
        {id: 3, name: "Pedro", age: 44}
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

            <button onClick={ deleteRandom }>
                Delete random user
            </button>
        </div>
    )
}

export default ListRender