import MyComponents from "./MyComponents";

const FirstComponent = () => {
    return(
        <div>
            <h2>Meu primeiro componente</h2>
            <MyComponents />
        </div>
    )
}

// linha escrita para conseguir exportar o componente para outros arquivos do projeto
export default FirstComponent;