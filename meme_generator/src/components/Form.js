import memeimg from '../images/memeimg.png';
import memeData from './memeData';
import MemeGenerator from './MemeGenerator';
import {useState} from "react"; 


export default function Form() {
    const [imgUrl,  setImgUrl] = useState(memeData[0])
    const [memeRandom, setMemeRandom] = useState({
        image: memeData[1].url, 
        topText: "Shut up", 
        bottomText: "Take my money", 
    })

    var topText, bottomText

    function handleRandomImage(e) {
        e.preventDefault();
        const index = Math.floor(Math.random() * (memeData.length )); 
        console.log("index: " + index)
        setMemeRandom(prevMeme =>({
            ...prevMeme, 
            image: memeData[index].url, 
            topText: topText, 
            bottomText: bottomText, 
        })
        )

        console.log(memeRandom)
    }

    function handleInput(e) {
        console.log(e.target.value)
        return (e.target.value)
    }

    return (
        <form className='form'>
            <div className = "form__data">
                <input 
                    type="text"  
                    className = "form__input" 
                    placeholder="Insert top text" 
                    onChange = {(e) => {topText = e.target.value}}  
                    value = {topText}   
                />
                <input 
                    type = "text" 
                    className = "form__input" 
                    placeholder ='Inset bottom text'
                    onChange = {(e) => {bottomText = e.target.value}} 
                    value = {bottomText}
                    name = "bottomText"
                />

            </div>

            <button 
                onClick = {handleRandomImage}
                className= "form__submit"
                >
                Get a new meme image
            </button>
            <MemeGenerator {...memeRandom} />
        </form>
    )
}