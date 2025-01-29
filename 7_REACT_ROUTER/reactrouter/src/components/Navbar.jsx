import './Navbar.css'

import { Link, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}

            <NavLink to="/" className={(isActive) => (isActive ? "esta-ativo" : "nao-ativo")}>Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar