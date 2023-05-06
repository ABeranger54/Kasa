import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import annonces from "../data/annonces.json"
import Rating from '../components/Rating';
import DropDown from '../components/Dropdown'
import '../styles/Location.css';

function Location(){
    var navigate = useNavigate();
    const {id} = useParams();
    const location = annonces.filter(loc => loc.id === id)[0];
   
    useEffect(() => {
        if (!location){
           return navigate("/error404");
        }
     });

     if(location){
        const tags = location.tags.map((tag, i) => <p key={i}>{tag}</p>);

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
                    <div id="locationIntroRight">
                        <div id="host">
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt={location.host.name} />
                        </div>
                        <Rating value={location.rating}/>
                    </div>
                </div>
                <div id="locationDropndowns">
                    <DropDown title="Description" description={location.description} />
                    <DropDown title="Équipements" description={ location.equipments } />
                </div>
            </main>
        )
     }
    
}

export default Location;