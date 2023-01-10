import memeimg from '../images/memeimg.png';

export default function MemeGenerator(props) {
    console.log(props)
    return (
        <div className="form__generator">
            <img className="form__img" />
            <div className = "form__text form__text--top">{props.topText.toUpperCase()}</div>
            <div className = "form__text form__text--bottom">AND TAKE MY MONEY</div>
         </div>
    ) 
}