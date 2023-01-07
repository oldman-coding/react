export default function Form() {
    return (
        <form className='form'>
            <div className = "form__data">
                <input className = "form__input" placeholder="take me"></input>
                <input className = "form__input" placeholder ='input'></input>
            </div>

            <button className="form__submit" type = 'submit'>Get a new meme image</button>
        </form>
    )
}