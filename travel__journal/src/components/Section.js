import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Section(props) {
    const {image, country, location_link, location_address, start_date, end_date, description  } = props
    return (
        <div className = "section">
            <img className = 'section__img' src = {image} />
            <div className = "section__content">
                <div className='section__location'>
                    <FontAwesomeIcon className= "section__location-icon" icon="fa-solid fa-location-dot" />
                    <p className = "section__location-country">{country.toUpperCase()}</p>
                    <a className = "section__location-link" href={location_link}>View on Google maps</a>
                </div>
                <div className='section__location-address'>{location_address}</div>
                <div className= "section__date">
                   {start_date} - {end_date}
                </div>
                <div className='section__description'>
                    {description}
                </div>
            </div>
        </div>
    )

}