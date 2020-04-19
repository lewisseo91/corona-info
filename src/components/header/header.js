import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './header.scss';
import HomeComponent from '../home/home';

class HeaderComponent extends Component {
    render () {
        return (
            <Router>
                <div className="header-container">
                    <div className="header-logo">
                        <Link to="/">
                            <img src="image/world.png" className="logo-img"/>
                        </Link>
                    </div>
                    <nav className="nav-container">
                        <ul className="nav-list-container">
                            <li>
                                <Link to="/home">홈</Link>
                            </li>
                            <li>
                                <Link to="/info">정보</Link>
                            </li>
                            <li>
                                <Link to="/status">현황</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        )
    }
}

export default HeaderComponent;