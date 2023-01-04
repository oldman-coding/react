import heroImage from '../images/hero.png';

export default function Hero() {
    return (
        <div className="hero">
            <img src = {heroImage} className="hero__image" />
            <h1 className="hero__heading">Online Experiences</h1>
            <p className="hero__description">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    ) 

}