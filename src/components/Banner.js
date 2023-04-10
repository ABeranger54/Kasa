import '../styles/Banner.css';
import banner from "../medias/bannerHome.png"

function Banner(){
    return (
    <div id="banner">
        <img src={banner} id="banner" alt="Chez vous, partout et ailleurs" />
        <h1>Chez vous, partout et ailleurs </h1>
      </div>
    );
}

export default Banner;