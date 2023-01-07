import memeimg from '../images/memeimg.png';

export default function Form() {
    return (
        <form className='form'>
            <div className = "form__data">
                <input className = "form__input" placeholder="Shut up"></input>
                <input className = "form__input" placeholder ='and take my money'></input>
            </div>

            <button className="form__submit" type = 'submit'>Get a new meme image</button>
            <div className="form__generator">
                <img className="form__img" src={memeimg} />
                <div className = "form__text form__text--top">SHUT UP</div>
                <div className = "form__text form__text--bottom">AND TAKE MY MONEY</div>
            </div>
            
        </form>
    )
}