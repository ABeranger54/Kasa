import '../styles/Header.css'
import logo from '../medias/logo.png'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav id="navBar">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;