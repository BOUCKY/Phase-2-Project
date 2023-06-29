import React, {useState} from "react";
import '../Recipe.css'


const RecipeCard = ({title, image, time, ingredients, instructions, favorite, changeFavorite, id}) => {

    // set state to true because the front of the card is showing
    const [card, setCard] = useState(true)

    // If the front of the card is displayed, and you click on it, it will change state to false which will make the back of the card display instead
    function handleFront(){
        setCard(false)
    }
    // Same as above but opposite
    function handleBack(){
        setCard(true)
    }

    const handleFavorite = () =>{
        changeFavorite(id)
    }

    // We only want to display the image and food name on the front of the card
    const front = <div onClick={handleFront}>
        <img className="foodPic" src = {image} height={300} width={300} alt = "food"></img>
        <p className="title">{title}</p>
        </div>
    // We only want to display the ingredients and instructions on the back of the card
    const back = <div onClick={handleBack}>
        <p className="ITitle">Ingredients</p><p className="ingredients">{ingredients}</p>
        <p className="ITitle">Instructions</p><p className="instructions">{instructions}</p>
        <p className="minutes">{time} minutes</p></div>
   
    return(
        <div className="recipe-card">
            {/* If card is true, display the front, if not, display the back. */}
            {card ? [front]: [back]}
            {/* If card is true, (meaning the front of the card is being displayed) show the favorite button. If not, (back of card is displayed) don't display it. */}
            {card ? <button className="favorite" onClick={handleFavorite}>{favorite ? '❤️' : '🖤'}</button> : <button style={{ display: "none" }}></button>}
        </div>
    )
}

export default RecipeCard