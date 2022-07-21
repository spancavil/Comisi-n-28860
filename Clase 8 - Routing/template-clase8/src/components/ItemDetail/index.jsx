import React from 'react';
import './styles.css';

const ItemDetail = ({ pokemonDetail }) => {
    if (pokemonDetail !== null) {
        return (
            <div className='container'>
                <img src={pokemonDetail.sprites.front_default} alt="portada-pokemon" width='300px'/>
                <div className='texts'>
                    <h3>{pokemonDetail.name}</h3>
                    <p>Tipo: {pokemonDetail.types[0].type.name}</p>
                    <p>Peso: {pokemonDetail.weight}</p>
                </div>
            </div>
        )
    }
    return (
        <p>Loading...</p>
    )
}

export default ItemDetail;