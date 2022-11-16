import { useState, useEffect } from 'react'; 

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        setIsPending(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsPending(false);
            }
            )
            .catch(error => {
                setError(error);
                setIsPending(false);
            }
            );
    }
    , [url]);

    return { data, isPending, error };
}



export default useFetch;