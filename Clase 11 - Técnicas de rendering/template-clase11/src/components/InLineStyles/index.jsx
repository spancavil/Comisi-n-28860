import React from 'react'

const InLineStyle = ({condition}) => {
  return (
    <span
        style={{
            color: condition ? 'green' : 'red'
        }}
    >Hola soy un texto</span>
  )
}

export default InLineStyle