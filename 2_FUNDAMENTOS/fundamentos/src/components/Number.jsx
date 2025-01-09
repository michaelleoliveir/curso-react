const TwoNumbers = () => {

    const a = 10;
    const b = 4

    const soma = () => 
    {
        alert(`${a} + ${b} = ${a + b}`)
    }

    return (
        <div>
            <h2>O primeiro número é: { a }</h2>
            <h2>O segundo número é: { b }</h2>

            <button onClick={ soma }>Clique para descobrir o resultado da soma</button>
        </div>
    )
}

export default TwoNumbers;