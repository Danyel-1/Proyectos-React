import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState();

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () =>{
            setLoading(true);

            try {
                const respuesta = await fetch(url);

                if (!respuesta.ok) {
                    let error = new Error("Error en la peticion Fetch");
                    error.status = respuesta.status || "00";
                    error.statusText = respuesta.statusText || "Ocurrio un error";
                    throw error;
                }

                const json = await respuesta.json();

                if (!signal.aborted) {
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                if (!signal.aborted) {
                    setData(null);
                    setError(error);
                }
            }finally{
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();
    },[url]);

  return {data, error, loading};
}
