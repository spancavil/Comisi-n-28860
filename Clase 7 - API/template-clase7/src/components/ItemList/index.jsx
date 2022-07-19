import React from 'react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
    <div>
        {products.map(producto => {
            return <Item key={producto.id} producto={producto}/>
        })}
    </div>
  )
}

export default ItemList