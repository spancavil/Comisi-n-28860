import React from 'react'
import Item from '../Item'

const ItemList = ({pokemons}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    }}>
        {pokemons.map(pokemon => {
            return <Item key={pokemon.name} pokemon={pokemon}/>
        })}
    </div>
  )
}

export default ItemList