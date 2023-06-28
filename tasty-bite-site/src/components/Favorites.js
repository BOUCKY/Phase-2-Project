import React from "react";
import RecipeCard from "./RecipeCard";

const Favorites = ({favoriteFoods, changeFavorite, allFoods:{allDrinks, allBreakfast, allLunches, allDinners, allDesserts}}) => {

    const favoriteCards = (foodObject) => {
        // if the recipe card's id is in favoriteFoods, return that recipe card
        if (favoriteFoods.some(favoriteFood => favoriteFood.id === foodObject.id)){
            return(
                <RecipeCard 
                id = {foodObject.id}
                key={foodObject.id}
                favorite={foodObject.favorite}
                changeFavorite = {changeFavorite}
                category={foodObject.category}
                image={foodObject.image}
                title={foodObject.title}
                time={foodObject.time}
                ingredients={foodObject.ingredients}
                instructions={foodObject.instructions}
            />
            )
        }
    }

    return(
        <div className="home">
            <h2 className="foodTitle" >Drinks</h2>
            {/* Only show the drink cards underneath the drinks header */}
            <div className="recipeContainer">
                {allDrinks.map(favoriteCards)}
            </div>
            {/* same as above */}
            <h2 className="foodTitle" >Breakfast</h2>
            <div className="recipeContainer">
                {allBreakfast.map(favoriteCards)}
            </div>
            <h2 className="foodTitle" >Lunch</h2>
            <div className="recipeContainer">
                {allLunches.map(favoriteCards)}
            </div>
            <h2 className="foodTitle" >Dinner</h2>
            <div className="recipeContainer">
                {allDinners.map(favoriteCards)}
            </div>
            <h2 className="foodTitle" >Dessert</h2>
            <div className="recipeContainer">
                {allDesserts.map(favoriteCards)}
            </div>
        </div>
    )
}

export default Favorites