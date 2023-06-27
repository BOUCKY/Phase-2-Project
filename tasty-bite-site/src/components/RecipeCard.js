import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


const RecipeCard = ({title, image, time, ingredients, instructions}) => {

    const [card, setCard] = useState("true")

    function switchCard(){
        setCard(!card)
    }

    const [favorite, setFavorite] = useState(false)
    
    const handleFavorite = () =>{
    setFavorite(!favorite)}

    const front = <div onClick={switchCard}><img src = {image} height={300} width={300} alt = "food"></img><p className="title">{title}</p></div>

    const back = <div onClick={switchCard}><p className="ingredients">{ingredients}</p><p className="instructions">{instructions}</p><p>{time}</p></div>
   
    return(
        <div className="recipe-card">
            {card ? [front]: [back]}
            {/* {favorite ? (
            // pass in the toggle handleFavorite function on click
            <button className="favorite" onClick={handleFavorite}><FontAwesomeIcon icon="fa-solid fa-heart" /></button>
            ) : (
            // pass in the toggle handleFavorite function on click
            <button className="favorite" onClick={handleFavorite}><FontAwesomeIcon icon="fa-regular fa-heart" /></button>
            )} */}
            <button className="favorite" onClick={handleFavorite}>
                <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} />
            </button>
        </div>
    )
}

export default RecipeCard