import React from "react";
import {
    Link,
    NavLink
  } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
                <Link className="navbar-brand" to="/">Coding Challenge</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item m-2">
                        <NavLink className="nav-link" exact to="/athletes">
                            Athletes List
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink className="nav-link" exact to="/new-athlete">
                            Create New
                        </NavLink>
                    </li>
                    <li className="nav-item m-2">
                        <NavLink className="nav-link" exact to="/profile">
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Navigation;