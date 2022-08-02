import React from 'react'

const ClasseWithOrOperator = ({claseAdicional}) => {
  return (
    <h1
        className={claseAdicional && 'otra-clase'}
    >Classes con operador or</h1>
  )
}

export default ClasseWithOrOperator