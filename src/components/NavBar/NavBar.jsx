import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    const stylesH2 = {color:"#fec007", fontSize: "40px" }

    return (
        <nav className="navbar">
            <h2 style={ stylesH2 }>PlayZone</h2>

            <ul className="ul">
                <a href=""><li>PS5</li></a>
                <a href=""><li>XBOX ONE</li></a>
                <a href=""><li>NINTENDO</li></a>
                <a href=""><li>PC</li></a>
            </ul>
            
            <CartWidget />

        </nav>
    )
}

export default NavBar 