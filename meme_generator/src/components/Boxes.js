import { useState } from "react";

import '../boxes.css'

export default function Boxes(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }
    return (
        <div  style = {styles} className="box">{props.id}</div>
    )
}