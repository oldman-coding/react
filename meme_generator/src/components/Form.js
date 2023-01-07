import memeimg from '../images/memeimg.png';


export default function Form() {
    function handeClick() {
        console.log('Click Done');
    }
    return (
        <form className='form'>
            <div className = "form__data">
                <input type="text" className = "form__input" placeholder="Shut up"></input>
                <input type = "text" className = "form__input" placeholder ='and take my money'></input>
            </div>

            <button onClick = {handeClick} className="form__submit">Get a new meme image</button>
            <div className="form__generator">
                <img className="form__img" src={memeimg} />
                <div className = "form__text form__text--top">SHUT UP</div>
                <div className = "form__text form__text--bottom">AND TAKE MY MONEY</div>
            </div>
            
        </form>
    )
}