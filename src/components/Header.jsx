import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        
            <nav className="navStyle">
                <Link to='/about'>
                    <h2>About</h2>
                </Link>
                <Link to='/' >
                    <h2>Home</h2>
                </Link>
                <Link to='/projects' >
                    <h2>Projects</h2>
                </Link>
            </nav>
    )
}

export default Header;