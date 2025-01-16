import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    // 3 - GERANCIAMENTO DE DADOS
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "" )
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário")
        console.log(name, email, bio, role)

        //VALIDAÇÃO
        // ENVIO

        // LIMPAR FORMULÁRIO
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    return (
        <div>
            {/* 1 - CRIAÇÃO DE FORM */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id='name' placeholder='Digite o seu nome' onChange={handleName} autoComplete='off' value={name} />
                </div>

                {/* 2 - LABEL ENVOLVENDO INPUT */}
                <label>
                    <span>Email</span>
                    <input type="email" name='email' placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} autoComplete='off' value={email} />
                </label>

                {/* 8 - TEXTAREA */}
                <label>
                    <span>Bio</span>
                    <textarea name="bio" id="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/* 9 - SELECT */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm