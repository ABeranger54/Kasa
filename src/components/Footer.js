import '../styles/Footer.css';
import logo from '../medias/logoWhite.png'

function Footer(){
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;