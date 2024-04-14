import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to='/' className='title'>
                WebSite
            </Link>
            <div
                className='menu'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? '  open' : ''}>
                <li>
                    <NavLink
                        to='/about'
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/services'
                        onClick={() => setMenuOpen(false)}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
