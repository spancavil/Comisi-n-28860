import React from 'react'

const BinaryOperator = ({ condition }) => {
    return (
        condition && <h1>Condition in binary operator is true</h1>
    )
}

export default BinaryOperator