import { useState } from 'react'
import '../contact.css'
import Star from './Star'

export default function Contact() {
    const [contact, setContact] = useState ({
        name: "Laura Smith",
        title: "Front end developer",
        website: "https://twitter.com/", 
        isFavorite: true,
    })

    

    function handleFavorite() {
        setContact(prevState => (
            {...prevState, isFavorite: !prevState.isFavorite}
        )
            
        )
    }

    return (
        <div className="app__contact">
            <div className = "profile"></div>
            <div className="profile-info">
                <h1 className="profile-info__name">Laura Smith</h1>
                <h3 className="profile-info__title">Frontend Developer</h3>
                <p>laurasmith.website</p>
                <Star isFilled ={contact.isFavorite} handleClick={handleFavorite} />
            </div>

        </div>
    )
}