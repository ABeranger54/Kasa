import '../styles/Rating.css';
import starEmpty from '../medias/starEmpty.png'
import starFull from '../medias/starFull.png'

function Rating(props){

    var count = 0;
    var alt = "Note: " + props.value + "/5";
    const render = [];
    while(count < props.value){
        render[count] = <img key={count} src={starFull} alt={alt} />;
        count++;
    }
    for(let i = count; i < 5; i++){
        render[i] = <img key={i} src={starEmpty} alt={alt} />;
    }


    return (
        <div id="rating">
            {render}
        </div>
    );
}

export default Rating;