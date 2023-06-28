import React from "react";
import '../Categorynav.css'
import { NavLink } from "react-router-dom";

const CategoryNav = () => {
    return(
        <div className="category-header">
            <div className="category-nav-bar">
            <li className="nav-bar-list"><NavLink className="nav-bar-link" to="/">All</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="dinners">Dinners</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="desserts">Desserts</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="lunch">Lunch</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="drinks">Drinks</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="breakfast">Breakfast</NavLink></li>
            </div>
        </div>
    )
}

export default CategoryNav