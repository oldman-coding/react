import memeimg from '../images/memeimg.png';

export default function MemeGenerator(props) {
    console.log(props)
    return (
        <div className="form__generator">
            <img className="form__img" src={props.url} />
            <div className = "form__text form__text--top">SHUT UP</div>
            <div className = "form__text form__text--bottom">AND TAKE MY MONEY</div>
         </div>
    ) 
}