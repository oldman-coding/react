import { useState } from "react";
import '../boxes.css'

export default function Boxes(props) {
    const [on, setOn] = useState(props.on)
    const handleClick = () => {
        setOn(on => !on)
    }
    const styles = {
        backgroundColor: on ? "#222222" : "#cccccc"
    }


    return (
        <div  
            style = {styles} 
            className="box"
            onClick = {handleClick}
            >

        </div>
    )
}