import React from 'react';
// import Button from '../Button';
import CartWidget from '../CartWidget';
import './styles.css';

export default function NavBar({temperatura, opcionAdicional}) {

    //const {temperatura, opcionAdicional} = props;
    //Prop es un objeto

    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">Ropa masculina</a></li>
            <li><a href="#contact">Ropa femenina</a></li>
            <li><a href="#about">Accesorios</a></li>
            <li><a href={`#${opcionAdicional}`}>{opcionAdicional}</a></li>
            <CartWidget/>
        </ul>
    )
} 