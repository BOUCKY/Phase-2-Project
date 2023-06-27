import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


const RecipeCard = ({title, image, time, ingredients, instructions}) => {

    const [card, setCard] = useState(true)
    
    function handleFront(){
        setCard(false)
    }

    function handleBack(){
        setCard(true)
    }

    const [favorite, setFavorite] = useState(false)
    
    const handleFavorite = () =>{
    setFavorite(!favorite)}


    const front = <div onClick={handleFront}><img src = {image} height={300} width={300} alt = "food"></img><p className="title">{title}</p></div>

    const back = <div onClick={handleBack}><p className="ingredients">{ingredients}</p><p className="instructions">{instructions}</p><p>{time}</p></div>
   
    return(
        <div className="recipe-card">
            {card ? [front]: [back]}
            <button className="favorite" onClick={handleFavorite}>
                <FontAwesomeIcon icon={favorite ? solidHeart : regularHeart} />
            </button>
        </div>
    )
}

export default RecipeCard