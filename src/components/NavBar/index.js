import React from 'react';
import { Link } from 'react-router-dom';

import './../../assets/Styles/styles.css';

// import './NavBar.css';

const Navbar = props => (

    <div className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container" max-height="56px">
            <a id="nameTextSpace" className="text-success bg-dark navbar-brand" href="#"><strong>Adrian Romero</strong></a>
            <button className="navbar-toggler border border-success" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">About <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );

export default Navbar;