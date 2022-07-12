import React, { useEffect, useState } from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {

  //Primero estados
  const [color, setColor] = useState('Verde')
  const [textColor, setTextColor] = useState('#0f0d9e')

  // let variable2 = "rojo"
  //Segundo efectos

  /* El useEffect recibe dos parámetros: el primero es la función callback que quiero ejecutar,
  el segundo parámetro son las "dependencias" de dicho effect:
    Las dependencias pueden ser las siguientes:
    1- [] : la función callback se ejecutará SOLAMENTE cuando se monta el componente.
    2- [estado]: la función callback se ejecutará cuando se MONTA el componente y ADEMAS cuando se actualiza el estado
  */
  useEffect(()=> {
    console.log("Se ejecuta al montarse el componente");
  }, [])
  
  useEffect(()=> {
    console.log("Este effect se ejecuta cuando se monta y cuando se actualiza el estado 'color'");
    console.log(`El valor de el estado "color" es: ${color}`)
  }, [color, textColor])
  
  //Tercero funciones callbacks
  const handleChange = () => {
    console.log("Se cambiara el valor del estado");
    if (color === "Verde"){
      setColor('Rojo');
    } else {
      setColor('Verde')
    }
  }

  const handleChangeTextColor = () => {
    setTextColor("#ffffff")
  }
  // const handleChange2 = () => {
  //   variable2 = "verde";
  // }

  //Lo último es el JSX
  return (
    <div>
        <h1 style={{
          color: textColor
        }}>{greeting}</h1>
        <h3>{color}</h3>
        <button onClick={handleChange}>Cambiar el valor del estado</button>
        <button onClick={handleChangeTextColor}>Cambiar el color del texto greeting</button>
        {/*En React nunca utilizamos variables sueltas para hacer los renders, siempre utilizaremos estados*/}
        {/* <h3>{variable2}</h3>
        <button onClick={handleChange2}>Cambiar el valor de la variable</button> */}
        <ItemCount stock={10}/>
    </div>
  )
}

export default ItemListContainer