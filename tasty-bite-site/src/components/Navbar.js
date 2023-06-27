import React from "react";
import '../Navbar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="header">
            <div className="nav-bar">
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="addrecipe">Add Recipe</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="favorites">Favorites</NavLink></li>
            </div>
        </div>
    )
}

export default NavBar