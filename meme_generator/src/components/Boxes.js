import { useState } from "react";
import dataBoxes from '../data/dataBoxes'
import '../boxes.css'
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";

export default function Boxes(props) {
    console.log(props)
    const [boxes, setBoxes] = useState (dataBoxes)
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    const boxesElements = boxes.map(box => <div style= {styles} className="box__item" key={box.id}>{box.id}</div>)
    return (
        <div  className="box">{boxesElements}</div>
    )
}