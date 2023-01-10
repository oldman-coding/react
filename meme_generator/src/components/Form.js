import memeimg from '../images/memeimg.png';
import memeData from './memeData';
import MemeGenerator from './MemeGenerator';
import {useState} from "react"; 


export default function Form() {
    const [imgUrl,  setImgUrl] = useState(memeData[0])
    const [topText, setTopText] = useState("Shut up")

    function handleRandomImage(e) {
        e.preventDefault();
        const index = Math.floor(Math.random() * (memeData.length )); 
        setImgUrl(memeData[index])
    }

    function handleTopText(e) {
        setTopText(e.target.value)
        console.log("topText is: ", topText)
    }

    return (
        <form className='form'>
            <div className = "form__data">
                <input 
                    type="text"  
                    className = "form__input" 
                    placeholder="Shut up" 
                    value ={topText} 
                    onChange = {handleTopText}     
                />
                <input type = "text" className = "form__input" placeholder ='and take my money'></input>
            </div>

            <button 
                onSubmit = {handleRandomImage}
                className= "form__submit"
                >
                Get a new meme image
            </button>
            {/* <MemeGenerator {...topText}/> */}
        </form>
    )
}