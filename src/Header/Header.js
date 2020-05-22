import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className = "header">
            <h1> :: Programmer Arko :: </h1>
            <h3>Salary Management</h3>
            <input type="text" placeholder="Search..." className = "search"/>
            <button>Search</button>
        </div>
    );
};

export default Header;