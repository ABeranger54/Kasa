import '../styles/Error404.css';
import { Link } from 'react-router-dom';

function Error404(){
    return (
        <main>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error404