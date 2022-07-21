import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [pokemonDetail, setPokemonDetail] = useState(null);

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/93')
                const data = await response.json();
                console.log(data);
                setPokemonDetail(data);
            } catch (error) {
                alert(`Hubo un error: ${error.message}`)
            }
        }
        getPokemonDetail();

    }, [])

    return (
        <ItemDetail pokemonDetail={pokemonDetail}/>
    )
}

export default ItemDetailContainer