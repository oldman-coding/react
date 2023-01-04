import zera from "../images/zaferes.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Card() {
    return (
        <div className="card">
            < div className="card__item">
                <img src={zera} className="card__image" />
                <div className="card__star">
                    <FontAwesomeIcon icon="fa-solid fa-star" className="card__star-icon" />
                    <span className="card__star-text">5.0 (6) - USA</span>
                </div>
                <p className="card__course">
                    Life lessons with Katie Zaferes 
                </p>
                <div className="card__price">
                    <p>From $136</p>
                    <span> / person</span>
                </div>
            </div>
        </div>
    )
}