import { createContext, useState } from "react"

// consegue obter esse contexto em outros arquivos
export const CounterContext = createContext();

// criando o provider, que será o responsável pela distribuição dos dados
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}