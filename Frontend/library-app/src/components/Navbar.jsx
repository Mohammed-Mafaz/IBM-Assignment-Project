// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-around">
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/publishers">Publishers</Link></li>
            <li><Link to="/book-authors">Authors</Link></li>
            <li><Link to="/book-copies">Copies</Link></li>
            <li><Link to="/book-lendings">Lendings</Link></li>
            <li><Link to="/cards">Cards</Link></li>
            <li><Link to="/library-branches">Branches</Link></li>
        </ul>
    </nav>
);

export default Navbar;
