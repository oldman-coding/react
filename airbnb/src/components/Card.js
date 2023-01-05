import zera from "../images/zaferes.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card({data}) { 
    // const cardElement = 
    return (
        <div className="card-wrapper">
            {
                data.map(item => {
                    return <div className="card" key = {item.id}>
                            <div className="card__badge">SOLD OUT</div>
                            {/* <img src= {`%PUBLIC_URL%/images/${item.img}`} className="card__image" /> */}
                            <img src= {zera} className="card__image" />
                            <div className="card__star">
                                <FontAwesomeIcon icon="fa-solid fa-star" className="card__star-icon" />
                                {item.rating && <span className="card__star-text">{item.rating} </span>}
                                <span className="card__star-text">({item.qty}) - </span>
                                <span className="card__star-text">{item.country}</span>
                            </div>
                            <p className="card__course">
                                {item.course} 
                            </p>
                            <div className="card__price">
                                <p>From {item.price}</p>
                                <span> / person</span>
                            </div>
                        </div>
                })
            }
        </div>
        

    )
}