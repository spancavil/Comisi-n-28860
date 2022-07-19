import React, { useState } from 'react'
import ItemList from '../../components/ItemList';
import { productosRaw } from '../../mocks/productos';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  
  const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(productosRaw)
    }, 3000)
  })

  traerProductos
  .then(result => {
    setProductos(result)
  })
  .catch(error => {
    alert(`Hubo un error: ${error}`)
  })

  console.log(productos);

  //Siempre que tengamos un array y queramos renderizar el contenido de cada elemento,
  //vamos a utilizar el método MAP.
  //El método map recorre cada uno de los elementos, lo procesa y me devuelve otro elemento procesado
  return (
    <ItemList products={productos}/>
  )
}

export default ItemListContainer