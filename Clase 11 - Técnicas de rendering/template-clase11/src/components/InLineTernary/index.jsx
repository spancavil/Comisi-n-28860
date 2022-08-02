import React from 'react'

const InLineTernary = ({number}) => {
  return (
    <>
        <span>{ number > 20  ? 'Hola, la condición es verdadera' : 'Hola, la condición es falsa'}</span>
    </>
  )
}

export default InLineTernary;