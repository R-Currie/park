import React from 'react';

const Header = () => {
    return(
        <header>
            <h2 className="brand"><a href="/">Macondo</a></h2>
            <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/">Accomodations</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact Us</a></li>
            </nav>
        </header>
    )
}

export default Header;