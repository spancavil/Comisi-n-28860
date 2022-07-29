import React, { useContext } from 'react'
import { UserSettings } from '../../context/UserSettings';
import './styles.css';

const SelectDarkMode = () => {

    const {setDarkMode} = useContext(UserSettings);

    const handleDarkMode = (evento) => {
        console.log(evento);
        if (evento.target.value === "light") setDarkMode(false);
        else setDarkMode(true);
    } 

    return (
        <div className='select-container'>
            <label>Theme:</label>
            <select className='select-mode' onChange={handleDarkMode} defaultValue="dark">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
}

export default SelectDarkMode