import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleContext } from "../hooks/useTitleContext";

const About = () => {
    const {counter} = useCounterContext();
    const {color} = useTitleContext();
    return (
        <div>
            <h1 style={{color: color}}>Sobre mim</h1>
            <p>Me chamo <span style={{color: "#646cffaa", fontWeight: "bold"}}>Michaelle</span> e estou focando meus estudos na tecnologia do React</p>
            <p>Quero que, em um futuro próximo, eu já consiga fazer, sozinha, páginas amigáveis e robustas utilizando essa tecnologia</p>

            <p>Vezes que eu cliquei no botão do counter: {counter}</p>
        </div>
    )
}

export default About