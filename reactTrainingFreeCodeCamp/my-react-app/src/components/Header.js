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
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </div>
            </div>
            

        </div>
    )
}