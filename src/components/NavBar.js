import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/aboutme" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/csprojects" exact activeClassName="active">
                            Computer Science Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/proftechwritingprojects" exact activeClassName="active">
                            {"Professional & Technical Writing Projects"}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contactme" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Thomas Morgenstern
                    </p>
                </footer>
            </nav>
        </div>
    );
}

export default NavBar;