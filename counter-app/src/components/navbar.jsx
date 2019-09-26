import React, { Component } from 'react';
class NavBar extends Component 
{
    render() 
    { 
        return (  
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-text">
                    Home 
                    <span className="badge badge-pill secondary">
                        {this.props.totalCounters}
                    </span>
                </span>
            </nav>
        );
    }
}
 
export default NavBar;