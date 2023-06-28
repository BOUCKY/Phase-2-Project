

import React from "react";
import '../Categorynav.css'
import { NavLink } from "react-router-dom";

const CategoryNav = () => {
    return(
        <div className="header">
            <div className="nav-bar">
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="dinners">Dinners</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="desserts">Deserts</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="lunch">Lunch</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="drinks">Drinks</NavLink></li>
            </div>
        </div>
    )
}

export default CategoryNav