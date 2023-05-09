import '../styles/Card.css';
import { Link } from 'react-router-dom';
import annonces from "../data/annonces.json"

function Card(props){

    const location = annonces.filter(loc => loc.id === props.id)[0];

    return (
        <div className="card">
            <Link to={"/location/" + props.id}>
                <div className="cardContainer">
                    <img src={location.cover} alt={location.title} />
                    <div className="cardTitle">{location.title}</div>
                </div>
            </Link>
        </div>
    );
}

export default Card;