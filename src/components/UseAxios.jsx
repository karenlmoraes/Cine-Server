import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsPending(true);
        axios.get(url)
            .then((res) => {
                const data = res.data
                setData(data);
                setIsPending(false)
                console.log(res.data)
            })
            .catch((error) => {
                setError(error);
                setIsPending(false);
                console.log(error)
            })

    }
        ,[url]);

    return { data, isPending, error };
}


export default useAxios;