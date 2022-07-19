import React from 'react'

//Es como si fuera una card del producto
const Item = ({producto}) => {
  return (
    <p>{producto.name}</p>
  )
}

export default Item