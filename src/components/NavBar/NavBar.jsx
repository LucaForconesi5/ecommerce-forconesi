import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav className="navbar">

            <ul className="ul">
                
                    <li>
                        <Link to="/categoria/Consolas">Consolas</Link>
                    </li>
                
                
                    <li>
                        <Link to="/categoria/Juegos">Juegos</Link>
                    </li>
                
                
                    <li>
                        <Link to="/categoria/Merch">Merch</Link>
                    </li>
                
            </ul>

            <Link to="/" className="brand">
                <h1>PlayZone</h1>
            </Link>

            <CartWidget />

        </nav>
    )
}

export default NavBar 