import '../styles/Card.css';
import { Link } from 'react-router-dom';

function Card(props){
    return (
        <div className="card">
            <Link to={"/location/" + props.id}>
                <h2>{props.title}</h2>
            </Link>
        </div>
    );
}

export default Card;