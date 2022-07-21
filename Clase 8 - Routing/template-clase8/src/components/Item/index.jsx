import React from 'react'

//Es como si fuera una card del producto
const Item = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div
      style={{
        width: '250px',
        padding: '20px',
        backgroundColor: 'salmon',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={pokemon.sprites.front_default} width="200px" alt='poke'/>
      <p>{pokemon.name}</p>
    </div>
  )
}

export default Item