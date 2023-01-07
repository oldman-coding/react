import meme from '../images/troll-face.png';

export default function Navbar() {
    return (
        <div className ="navbar">
            <div className = "nav__img">
                <img className = "nav__logo" src={meme}></img>
                <span className = "nav__heading">Meme Generator</span>
            </div>
            <div className = "nav__title">React course - Project 3</div>
        </div>
    )
}