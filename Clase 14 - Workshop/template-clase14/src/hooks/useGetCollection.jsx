import {useEffect, useState} from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { database } from '../firebase/config';

const useGetCollection = (categoryId) => {

    const [data, setData] = useState([]);
    const [pokemonsOriginales, setPokemonsOriginales] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect( ()=> {

        (async ()=> {
            try {
                setLoading(true);
                if (pokemonsOriginales.length === 0) {
                    const q = query(collection(database, "products"));
                    const querySnapshot = await getDocs(q);
                    const productos = [];
                    querySnapshot.forEach((doc) => {
                        const producto = { id: doc.id, ...doc.data() }
                        productos.push(producto)
                    });
                    setPokemonsOriginales(productos)
                } else {
                    let pokemonsFiltrados = [...pokemonsOriginales]
                    if (categoryId) {
                        pokemonsFiltrados = pokemonsOriginales.filter(pokemon => pokemon.types[0].type.name === categoryId)
                    }
                    setData(pokemonsFiltrados)
                }
                setLoading(false);
        
            } catch (error) {
                setError(error.message);
            }

        })()

    }, [categoryId, pokemonsOriginales])

    return {
        data,
        error,
        loading
    }
}

export default useGetCollection