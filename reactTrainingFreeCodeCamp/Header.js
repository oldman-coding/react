export default function Header() {
    const myStyle = {
        display: flex, 
        justifyContent: 'space-between',
    };
    
    return (
        <div className ="header" style = {myStyle}>
            <img src="./logo-react.png" width = "40px" />
            <ul className="nav-items">
                <li>About us</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
