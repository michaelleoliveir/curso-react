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

    // obtendo o id do produto
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method)
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                },
            });
            setMethod(method)
            setItemId(data)
        }
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

        const httpRequest = async () => {

            let json;

            if(method === "POST") {

                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
                json = await res.json();
    
            } else if (method === "DELETE") {
                const deleteUrl =`${url}/${itemId}`; 
                const res = await fetch(deleteUrl, config);
                json = await res.json()
            }

            setCallFetch(json)
        }

        httpRequest();
        
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}