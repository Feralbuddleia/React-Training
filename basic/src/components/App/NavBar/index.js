import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="App-nav">
        <ul className="App-text-left">
            <li><Link to='/'> Home </Link> </li>
            <li><Link to='/hw1/htmltable'> HtmlTable </Link> </li>
            <li><Link to='/hw1/iphone'> Iphone Layout </Link> </li> 
            <li><Link to='/hw2'> Counter </Link> </li>
            <li><Link to="/hw3"> Timer </Link> </li>
            <li><Link to="/hw4"> GitHubUser</Link> </li>
        </ul>
    </nav>
)

export default NavBar;