import { useParams } from 'react-router-dom';
import '../styles/Location.css';
import Gallery from '../components/Gallery';
import annonces from "../data/annonces.json"

function Location(){

    const {id} = useParams();
    const location = annonces.filter(loc => loc.id === id)[0];
    const tags = location.tags.map((tag) => <p>{tag}</p>);

    return (
        <main>
            <Gallery id={id} />
            <div id="locationIntroduction">
                <div>
                    <h1>{location.title}</h1>
                    <h2>{location.location}</h2>
                    <div id="tags">
                        {tags}
                    </div>
                </div>
                <div>
                    <div id="host">
                        <p>{location.host.name}</p>
                        <img src={location.host.picture} alt={location.host.name} />
                    </div>
                    <div>NOTATION</div>
                </div>
            </div>
        </main>
    )
}

export default Location;