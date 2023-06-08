import { useState, useEffect } from "react"


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchData = async() => {
            setIsPending(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
                setIsPending(false)
                setData(json)
                setError(null)
            } catch (err){
                setError('No hay resultados')
            }
        }
            
        fetchData()
    }, [url])

    return {data : data, isPending, error}

}

export default useFetch