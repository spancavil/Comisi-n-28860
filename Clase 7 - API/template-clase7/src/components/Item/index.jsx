import React from 'react'

//Es como si fuera una card del producto
const Item = ({pokemon}) => {
  return (
    <p>{pokemon.name}</p>
  )
}

export default Item