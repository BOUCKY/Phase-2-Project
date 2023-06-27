import React from "react";
import { useState } from "react";

const RecipeCard = ({title, image, time, ingredients, instructions}) => {

    const [card, setCard] = useState("true")

    function switchCard(){
        setCard(!card)
    }

    const front = <div onClick={switchCard}><img src = {image} height={300} width={300} alt = "food"></img><p className="title">{title}</p></div>

    const back = <div onClick={switchCard}><p className="ingredients">{ingredients}</p><p className="instructions">{instructions}</p><p>{time}</p></div>
   
    return(
        <div className="recipe-card">
            {card ? [front]: [back]}
            <button></button>
        </div>
    )
}

export default RecipeCard