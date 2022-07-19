import React from 'react'
import Item from '../Item'

const ItemList = ({pokemons}) => {
  return (
    <div>
        {pokemons.map(pokemon => {
            return <Item key={pokemon.name} pokemon={pokemon}/>
        })}
    </div>
  )
}

export default ItemList