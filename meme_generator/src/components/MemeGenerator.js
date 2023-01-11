import memeimg from '../images/memeimg.png';

export default function MemeGenerator(props) {
    console.log(props)
    return (
        <div className="form__generator">
            <img className="form__img" src={props.image}/>
            <div 
                className = "form__text form__text--top"
            >
                {props.topText}
            </div>
            <div 
            className = "form__text form__text--bottom"
            >
                {props.bottomText}
            </div>
        </div>
    ) 
}