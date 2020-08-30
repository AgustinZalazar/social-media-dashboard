import React from 'react';
import './styles/header.css';


const header = ({ children }) => {
    return (
        <header className="header">
        <div className="wrapper">
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers: 23,004</p>
            { children }
        </div>
    </header>
    )
}

export default header
