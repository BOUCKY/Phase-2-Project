import React from "react";
import RecipeCard from "./RecipeCard";
import "../Recipe.css"

function Drinks({allDrinks,changeFavorite}){

    const drinkCards = allDrinks.map(foodObject => <RecipeCard id = {foodObject.id}
        key={foodObject.id}
        favorite={foodObject.favorite}
        changeFavorite = {changeFavorite}
        category={foodObject.category}
        image={foodObject.image}
        title={foodObject.title}
        time={foodObject.time}
        ingredients={foodObject.ingredients}
        instructions={foodObject.instructions}/>)
    return(
        <div className="home">
            <div className="recipeContainer">
                {drinkCards}
            </div>
        </div>
    )
}

export default Drinks