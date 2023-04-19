import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Card(props){
    return (
        <Link to={"/location/" + props.id}>
            <div className="card">
                <h2>{props.title}</h2>
            </div>
        </Link>
    );
}

export default Card;