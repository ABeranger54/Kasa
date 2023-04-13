import '../styles/Dropdown.css';
import arrowUp from '../medias/arrowUp.png'
import arrowDown from '../medias/arrowDown.png'
import { useState } from 'react'

function Dropdown(props){
    const [isOpen, updateOpen] = useState(true);
    const arrow = (isOpen ? arrowUp : arrowDown);
    const alt = (isOpen ? "Fermer" : "Ouvrir");

    return (
        <div className="dropdown">
            <div className="dropdownHead">
                <h2>{props.title}</h2>
                <img src={arrow} alt={alt} onClick={()=> onDropDownStateChanged(isOpen, updateOpen)}/>
            </div>
            {isOpen && <p>{props.description}</p>}
        </div>
    );
}

function onDropDownStateChanged(isOpen, updateFunc){
    updateFunc(!isOpen);
}

export default Dropdown;