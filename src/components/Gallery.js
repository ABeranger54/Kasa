import '../styles/Gallery.css';
import annonces from "../data/annonces.json"
import galleryLeft from "../medias/galleryLeft.png"
import galleryRight from "../medias/galleryRight.png"
import { useState } from 'react'

function Gallery(props){

    const location = annonces.filter(loc => loc.id === props.id)[0];
    const pictures = location.pictures;
    const size = pictures.length;

    const [current, updateCurrent] = useState(0);
    const previousIndex = (current > 0) ? current - 1 : size - 1;
    const nextIndex = (current < size - 1) ? current + 1 : 0;

    return (
        <div id="gallery">
            <img src={pictures[current]} alt={location.title + " (image " + (current + 1) + ")"}/>
            {size > 1 && <img src={galleryLeft} id="arrowLeft" className="arrow" alt="Précédent" onClick={()=> updateCurrent(previousIndex)} />}
            {size > 1 &&  <img src={galleryRight} id="arrowRight" className="arrow" alt="Suivant" onClick={()=> updateCurrent(nextIndex)} />}
            {size > 1 &&  <p id="imageIndex">{current+1}/{size}</p>}
        </div>
    );
}

export default Gallery;