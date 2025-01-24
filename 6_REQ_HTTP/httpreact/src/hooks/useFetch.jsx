import { useState, useEffect } from "react";

// criando a função
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // refatorando o POST no mesmo hook
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // configurando o loading
    const [loading, setLoading] = useState(false)
    
    // tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
        }

        setMethod(method)
    }

    useEffect(() => {
        
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url);
                const data = await res.json();

                setData(data);
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados... Tente novamente mais tarde")
            }

            setLoading(false)
        }

        fetchData();

    }, [url, callFetch]);

    useEffect(() => {

        const controlData = async () => {
            if(method === "POST") {

                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
                const data = await res.json();
    
                setCallFetch(data)
            }
        }

        controlData();
        
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}