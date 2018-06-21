import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="App-nav">
        <ul className="App-text-left">
            <li><Link to='/'> Home </Link> </li>
            <li><Link to='/hw1/htmltable'> HtmlTable </Link> </li>
            <li><Link to='/hw1/iphone'> Iphone Layout </Link> </li> 
        </ul>
    </nav>
)

export default NavBar;