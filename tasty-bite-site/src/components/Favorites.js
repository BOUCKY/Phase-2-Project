import React from "react";
import RecipeCard from "./RecipeCard";
import CategoryNav from "./Categorynav";

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
        <div>
            <CategoryNav />
            <div className="home">
                <div className="recipeContainer">
                    {favoriteCards}
                </div>
            </div>
        </div>
    )
}

export default Favorites