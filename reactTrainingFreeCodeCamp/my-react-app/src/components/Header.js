import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <div>
            <div className = "profile"></div>
            <div className="profile-info">
                <h1 className="profile-info__name">Laura Smith</h1>
                <h3 className="profile-info__title">Frontend Developer</h3>
                <p>laurasmith.website</p>
                <div className="profile-info__contact">
                    <button className='profile-email'>
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                        <span>Email</span>
                    </button>
                    <button className='profile-linkedin'>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" className='profile-linkedin__icon' />
                        <span>Linkedin</span>
                    </button>
                    
                    
                </div>
            </div>
            {/* <div className="about">
                <div className="about__heading">About</div>
                <div className ="about__description">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                
                </div>
            </div> */}
            

        </div>
    )
}