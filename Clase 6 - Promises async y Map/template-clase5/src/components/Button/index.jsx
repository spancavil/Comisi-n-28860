import React from 'react';
import './styles.css'

const Button = ({styles}) => {
    return (
        <button
            className='button-custom'
            style={{...styles}}
        >Presione aquí</button>)
}

export default Button