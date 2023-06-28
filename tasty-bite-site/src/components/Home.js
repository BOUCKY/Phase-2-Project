import React from "react";
import '../Recipe.css'
import RecipeCard from "./RecipeCard";

const Home = ({changeFavorite, allFoods:{allDrinks, allBreakfast, allLunches, allDinners, allDesserts}}) => {
    
    const renderCard = (foodObject) => {
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

    return(
        <div className="home">
            <h2 className="foodTitle" >Drinks</h2>
            {/* Only show the drink cards underneath the drinks header */}
            <div className="recipeContainer">
                {allDrinks.map(renderCard)}
            </div>
            {/* same as above */}
            <h2 className="foodTitle" >Breakfast</h2>
            <div className="recipeContainer">
                {allBreakfast.map(renderCard)}
            </div>
            <h2 className="foodTitle" >Lunch</h2>
            <div className="recipeContainer">
                {allLunches.map(renderCard)}
            </div>
            <h2 className="foodTitle" >Dinner</h2>
            <div className="recipeContainer">
                {allDinners.map(renderCard)}
            </div>
            <h2 className="foodTitle" >Dessert</h2>
            <div className="recipeContainer">
                {allDesserts.map(renderCard)}
            </div>
        </div>
    )
}

export default Home

