import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => (
    <nav>
        <ul className="text_left">
            <li><Link to='/'> Home </Link> </li>
            <li><Link to='/hw1/htmltable'> HtmlTable </Link> </li>
        </ul>
    </nav>
)

export default NavBar;