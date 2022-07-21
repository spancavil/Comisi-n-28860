import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [pokemonDetail, setPokemonDetail] = useState(null);

    const {itemId} = useParams();

    console.log(itemId);

    useEffect(() => {
        const getPokemonDetail = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${itemId}`)
                const data = await response.json();
                console.log(data);
                setPokemonDetail(data);
            } catch (error) {
                alert(`Hubo un error: ${error.message}`)
            }
        }
        getPokemonDetail();

    }, [itemId])

    return (
        <ItemDetail pokemonDetail={pokemonDetail}/>
    )
}

export default ItemDetailContainer