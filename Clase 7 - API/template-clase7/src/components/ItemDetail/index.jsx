import React from 'react'

const ItemDetail = ({ pokemonDetail }) => {
    if (pokemonDetail !== null) {
        return (
            <div>
                <img src={pokemonDetail.sprites.front_default} alt="portada-pokemon" />
                <p>{pokemonDetail.name}</p>
            </div>
        )
    }
    return (
        <p>Loading...</p>
    )
}

export default ItemDetail;