import React from 'react'

const ReturnTemprano = ({condition}) => {

    console.log(condition);

    //Falsy => 0, "", null, undefined, false
    //Truthy => los que no son los de arriba
    if (condition) return(
        <h1>Condition is true</h1>
    )
    return (
        <h2>Condition is false</h2>
    )
}

export default ReturnTemprano