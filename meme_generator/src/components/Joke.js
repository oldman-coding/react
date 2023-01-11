import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(props.isShown)
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            <h3>{props.heading}</h3>
            {isShown && <p>{props.description}</p>}
            <button onClick ={toggleShown}>
                {isShown ? "Hide" : "More"}
            </button>
        </div>
    ) 

}