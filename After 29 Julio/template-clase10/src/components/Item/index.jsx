import React from 'react';
import { useNavigate } from 'react-router-dom';

//Es como si fuera una card del producto
const Item = ({ pokemon }) => {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/item/${id}`)
  }
  return (
    <div
      style={{
        width: '250px',
        padding: '20px',
        backgroundColor: 'salmon',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick = {()=> handleNavigate(pokemon.id)}
    >
      <img src={pokemon.sprites.front_default} width="200px" alt='poke'/>
      <p>{pokemon.name}</p>
    </div>
  )
}

export default Item