import React, { useContext } from 'react'
import { ShopData } from '../../context/Shop'

const SelectDarkMode = () => {

    const {setDarkMode} = useContext(ShopData);

    const handleDarkMode = (evento) => {
        console.log(evento);
        if (evento.target.value === "light") setDarkMode(false);
        else setDarkMode(true);
    } 

    return (
        <>
            <label>Theme:</label>

            <select name="cars" id="cars" onChange={handleDarkMode}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </>
    )
}

export default SelectDarkMode