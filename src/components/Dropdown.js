import '../styles/Dropdown.css';
import arrowUp from '../medias/arrowUp.png'
import arrowDown from '../medias/arrowDown.png'
import { useState } from 'react'

function Dropdown(props){
    const [isOpen, updateOpen] = useState(false);
    const arrow = (isOpen ? arrowUp : arrowDown);
    const alt = (isOpen ? "Fermer" : "Ouvrir");

    return (
        <div className="dropdown">
            <div className="dropdownHead" onClick={()=> updateOpen(!isOpen)}>
                <h2>{props.title}</h2>
                <img src={arrow} alt={alt} />
            </div>
            {isOpen && <p>{props.description}</p>}
        </div>
    );
}

export default Dropdown;