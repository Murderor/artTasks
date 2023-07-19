import React from 'react';
import logo from '../images/logo.svg'
import {Navbar} from "react-bootstrap";
import './main.css'
import './bootstrap-theme.css'
import './office-plan.css'

const NaviBar = () => {
    return (
        <header>
        <Navbar className="navbar navbar-dark navbar-expand bg-artezio">
            <div className="container">
                <a className="navbar-brand" href="/home">
                    <img src={logo} alt height="55"/>
                    <span className="logo-sub-office"> Office</span>
                </a>
            </div>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Office Plan</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/employee">Employees</a>
                </li>
            </ul>
        </Navbar>
        </header>
    );
};

export default NaviBar;