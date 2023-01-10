import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../star.css'

export default function Star(props) {
    let favoriteStar = props.isFilled ? "star--yellow" : ""
    return (
        <div className="profile-info__contact">
            <FontAwesomeIcon icon="fa-solid fa-star" 
                className= {favoriteStar} 
                onClick = {props.handleClick}
            />
    </div>
    )
}