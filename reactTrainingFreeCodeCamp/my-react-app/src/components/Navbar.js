import logo from "../logo.svg"


export default function Navbar() {
    return (
        <nav>
            <img className="nav__logo" src = {logo} />
            <h3>React facts</h3>
            <h4 className="nav__extra-title">React facts project 1</h4>
        </nav>
    )
}