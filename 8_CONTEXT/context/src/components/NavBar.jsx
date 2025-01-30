import { Link } from "react-router"

import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/">Início</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default NavBar