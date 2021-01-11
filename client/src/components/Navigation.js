import React from "react";
import {
    Link,
    NavLink
  } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg newColorNavBar" style={{backgroundColor: "rgb(28, 28, 28)"}}>
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
                </ul>
            </nav>
        );
    };
};

export default Navigation;