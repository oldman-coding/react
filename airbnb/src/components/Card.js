// import zera from "%PUBLIC_URL%/images/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card({data}) { 
    // const cardElement = 
    return (
        <div className="card-wrapper">
            {
                data.map(item => {
                    return <div className="card">
                    <img src= {`%PUBLIC_URL%/images/${item.img}`} className="card__image" />
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