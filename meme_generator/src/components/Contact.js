import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'
import '../contact.css'

export default function Contact() {
    const [contact, setContact] = useState ({
        name: "Laura Smith",
        title: "Front end developer",
        website: "https://twitter.com/", 
        isFavorite: true,
    })

    let favoriteStar = contact.isFavorite ? "star--yellow" : ""

    function handleFavorite() {
        setContact(prevState => {
            return {...prevState, isFavorite: !prevState.isFavorite}
        }
        )
    }

    return (
        <div className="app__contact">
            <div className = "profile"></div>
            <div className="profile-info">
                <h1 className="profile-info__name">Laura Smith</h1>
                <h3 className="profile-info__title">Frontend Developer</h3>
                <p>laurasmith.website</p>
                <div className="profile-info__contact">
                    <FontAwesomeIcon icon="fa-solid fa-star" 
                        className= {favoriteStar} 
                        onClick = {handleFavorite}
                        />
                </div>
            </div>

        </div>
    )
}