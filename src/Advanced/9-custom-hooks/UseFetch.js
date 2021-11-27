import {useState, useEffect} from 'react';

const UseFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState([])
    const getProducts = async () => {
        const data = await fetch(url)
        const dataJson = await data.json();
        setResponse(dataJson);
        setLoading(false);
    }
    useEffect(() => {setTimeout(() => {getProducts()}, 1000)}, [url])

    return{loading, response}
};

export default UseFetch;