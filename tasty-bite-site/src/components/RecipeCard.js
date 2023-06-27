import React from "react";

const RecipeCard = ({title, image, time, ingredients, instructions}) => {
    return(
        <div className="recipe-card">
            <img src={image} alt="food" height={300} width={300}></img>
            <p className="title">{title}</p>
            <p className="time">{time}</p>
            <p className="ingredients">{ingredients}</p>
            <p className="instructions">{instructions}</p>
        </div>
    )
}

export default RecipeCard