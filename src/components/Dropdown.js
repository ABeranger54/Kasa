import '../styles/Dropdown.css';
import arrowUp from '../medias/arrowUp.png'
import arrowDown from '../medias/arrowDown.png'
import { useState } from 'react'

function Dropdown(props){
    const [isOpen, updateOpen] = useState(false);
    const arrow = (isOpen ? arrowUp : arrowDown);
    const alt = (isOpen ? "Fermer" : "Ouvrir");
    const content = [];
    if(Array.isArray(props.description)){
        props.description.forEach((e, i) => {
            content.push(e);
            content.push(<br key={i}/>);
        });
    }else{
        content.push(props.description);
    }

    return (
        <div className="dropdown">
            <div className="dropdownHead" onClick={()=> updateOpen(!isOpen)}>
                <h2>{props.title}</h2>
                <img src={arrow} alt={alt} />
            </div>
            {isOpen && <p>{content}</p>}
        </div>
    );
}

export default Dropdown;