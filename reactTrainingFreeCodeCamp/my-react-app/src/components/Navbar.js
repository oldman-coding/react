import logo from "../logo.svg"


export default function Navbar() {
    return (
        <nav className = 'nav-bar'>
            <div>
                <img src = {logo}></img>
                <h2>React facts</h2>
            </div>
            <h3>React facts project 1</h3>
        </nav>
    )
}