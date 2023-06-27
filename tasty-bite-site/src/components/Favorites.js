import React from "react";
import RecipeCard from "./RecipeCard";

const Favorites = ({favoriteFoods, changeFavorite}) => {
    const favoriteCards = favoriteFoods.map(foodObject => <RecipeCard id = {foodObject.id}
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
        <div className="favorites">
            {favoriteCards}
        </div>
    )
}

export default Favorites