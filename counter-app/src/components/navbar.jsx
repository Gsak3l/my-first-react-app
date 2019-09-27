import React, { Component } from 'react';
//stateless functional component
const NavBar = (props) =>
{
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-text">
            Home
            <span className="badge badge-pill secondary">
                {props.totalCounters}
            </span>
        </span>
    </nav>
};
 
export default NavBar;