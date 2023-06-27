import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


const RecipeCard = ({title, image, time, ingredients, instructions, favorite, changeFavorite, id}) => {

    const [card, setCard] = useState(true)

    
    function handleFront(){
        setCard(false)
    }

    function handleBack(){
        setCard(true)
    }

    
    const handleFavorite = () =>{
        changeFavorite(id)
    }


    const front = <div onClick={handleFront}><img className="foodPic" src = {image} height={300} width={300} alt = "food"></img><p className="title">{title}</p></div>

    const back = <div onClick={handleBack}><p className="ITitle">Ingredients</p><p className="ingredients">{ingredients}</p><p className="ITitle">Instructions</p><p className="instructions">{instructions}</p><p className="minutes">{time} minutes</p></div>
   
    return(
        <div className="recipe-card">
            {card ? [front]: [back]}
            <button className="favorite" onClick={handleFavorite}>
                <FontAwesomeIcon className="heart" icon={favorite ? solidHeart : regularHeart} />
            </button>
        </div>
    )
}

export default RecipeCard