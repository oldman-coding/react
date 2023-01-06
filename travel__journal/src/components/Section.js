import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Section() {
    return (
        <div className = "section">
            <img className = 'section__img' src ="https://source.unsplash.com/WLxQvbMyfas" />
            <div className = "section__content">
                <div className='section__location'>
                    <FontAwesomeIcon className= "section__location-icon" icon="fa-solid fa-location-dot" />
                    <p className = "section__location-country">JAPAN</p>
                    <a className = "section__location-link" href="https://google.com">View on Google maps</a>
                </div>
                <div className='section__location-address'>Mount Fuji</div>
                <div className= "section__date">
                    12 Jan, 2021 - 24 Jan, 2021
                </div>
                <div className='section__description'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </div>
            </div>
        </div>
    )

}