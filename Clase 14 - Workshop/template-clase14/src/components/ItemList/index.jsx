import React from 'react'
import Item from '../Item'
import './styles.css';

const ItemList = ({pokemons}) => {
  return (
    <div className='container'>
        {pokemons.map(pokemon => {
            return <Item key={pokemon.name} pokemon={pokemon}/>
        })}
    </div>
  )
}

export default ItemList