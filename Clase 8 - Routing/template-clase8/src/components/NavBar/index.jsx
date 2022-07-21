import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';

export default function NavBar({ temperatura, opcionAdicional }) {

    //const {temperatura, opcionAdicional} = props;
    //Prop es un objeto

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/grass">Type: grass</Link></li>
            <li><Link to="/category/fire">Type: fire</Link></li>
            <li><Link to="/category/water">Type: water</Link></li>
            <li><Link to="/category/normal">Type: normal</Link></li>
            <li><Link to="/category/poison">Type: poison</Link></li>
            <CartWidget />
        </ul>
    )
} 