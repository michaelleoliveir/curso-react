const TemplateExpressions = () =>{
    
    const name = "Michaelle"
    const data = {
        age: 21,
        job: "Developer"
    }

    return (
        <div>
            <p>Olá, {name}. Tudo bem?</p>
            <p>Você ainda atua como {data.job}?</p>
            <p>{4 + 4}</p>
            <p>{ console.log("Testando se vai aparecer no console") }</p>
        </div>
    )
}

export default TemplateExpressions