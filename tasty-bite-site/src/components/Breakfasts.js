import React from "react";
import "../Recipe.css"
import RecipeCard from "./RecipeCard";

function Breakfasts({allBreakfast, changeFavorite}){
    const breakfastCards = allBreakfast.map(foodObject => <RecipeCard id = {foodObject.id}
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
                {breakfastCards}
            </div>
        </div>
    )
}

export default Breakfasts