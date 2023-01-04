import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <div className = "footer">
            <FontAwesomeIcon icon="fa-brands fa-twitter" className='footer__icon' />
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" className='footer__icon' />
            <FontAwesomeIcon icon="fa-brands fa-github" className='footer__icon' />
            <FontAwesomeIcon icon="fa-brands fa-instagram" className='footer__icon' />
        </div>
    )
   
}