import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({ pokemonDetail }) => {

    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate()

    const onAddCart = (quantity) => {
        console.log("Se agrega al cart la cantidad: ", quantity);
        setQuantity(quantity)
    }

    const onConfirm = () => {
        navigate('/cart')
    }
 
    if (pokemonDetail !== null) {
        return (
            <div className='container'>
                <img src={pokemonDetail.sprites.front_default} alt="portada-pokemon" width='300px' />
                <div className='texts'>
                    <h3>{pokemonDetail.name}</h3>
                    <p>Tipo: {pokemonDetail.types[0].type.name}</p>
                    <p>Peso: {pokemonDetail.weight}</p>
                    {quantity === 0 ?
                        <ItemCount stock={10} handleAddCart={onAddCart} />
                        :
                        <button onClick={onConfirm}>Terminar mi compra</button>
                    }
                </div>
            </div>
        )
    }
    return (
        <p>Loading...</p>
    )
}

export default ItemDetail;