import '../styles/Header.css'
import logo from '../medias/logo.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header(){
    const location = useLocation();
    
    const isCurrentURL = (url) => {
        return location.pathname.toLowerCase() === url.toLowerCase();
    }

    const home =  isCurrentURL("/") ? {textDecoration: "underline"} : {};
    const about = isCurrentURL("/about") ? {textDecoration: "underline"} : {};

    return(
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav id="navBar">
                <ul>
                <li style={home}><Link to="/">Accueil</Link></li>
                <li style={about}><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;