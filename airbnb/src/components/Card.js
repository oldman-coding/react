import zera from "../images/zaferes.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card(props) { 
    console.log(props)
    let badgeText; 
    if (props.spot === 0) {
        badgeText = "SOLD OUT"
        console.log(badgeText)
    }
    if (props.location == "Online") {
        badgeText = "ONLINE"
        console.log(badgeText)
    }
    return (
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            {/* <img src= {`%PUBLIC_URL%/images/${props.img}`} className="card__image" /> */}
            <img src= {zera} className="card__image" />
            <div className="card__star">
                <FontAwesomeIcon icon="fa-solid fa-star" className="card__star-icon" />
                {props.rating && <span className="card__star-text">{props.rating} </span>}
                <span className="card__star-text">({props.qty}) - </span>
                <span className="card__star-text">{props.country}</span>
            </div>
            <p className="card__course">
                {props.course} 
            </p>
            <div className="card__price">
                <p>From {props.price}</p>
                <span> / person</span>
            </div>
        </div>
    )
}