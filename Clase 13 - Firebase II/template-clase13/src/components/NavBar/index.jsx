import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopData } from '../../context/Shop';
import CartWidget from '../CartWidget';
import SelectDarkMode from '../SelectDarkMode';
import './styles.css';

export default function NavBar({ temperatura, opcionAdicional }) {

    //const {temperatura, opcionAdicional} = props;
    //Prop es un objeto

    const {darkMode} = useContext(ShopData);

    // console.log(darkMode);

    return (
        <ul style={{backgroundColor: darkMode ? '#333': 'beige'}}>
            <li><Link to="/" style={{color: darkMode ? 'white': 'black'}}>Home</Link></li>
            <li><Link to="/category/grass" style={{color: darkMode ? 'white': 'black'}}>Type: grass</Link></li>
            <li><Link to="/category/fire" style={{color: darkMode ? 'white': 'black'}}>Type: fire</Link></li>
            <li><Link to="/category/water" style={{color: darkMode ? 'white': 'black'}}>Type: water</Link></li>
            <li><Link to="/category/normal" style={{color: darkMode ? 'white': 'black'}}>Type: normal</Link></li>
            <li><Link to="/category/poison" style={{color: darkMode ? 'white': 'black'}}>Type: poison</Link></li>
            <CartWidget />
            <SelectDarkMode/>
        </ul>
    )
} 