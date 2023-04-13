import '../styles/Banner.css';

function Banner(props){
    return (
      <div id="banner">
        <img src={props.image} id="banner" alt="Chez vous, partout et ailleurs" />
        <h1>{props.label}</h1>
      </div>
    );
}

export default Banner;