import React from "react";
import '../Recipe.css'
import RecipeCard from "./RecipeCard";
import CategoryNav from "./Categorynav";

const Home = ({foodData,changeFavorite}) => {
   
      const renderData = foodData.map((foodObject) => {
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
      })

    return(
        <div className="home">
            <div className="recipeContainer">
                {renderData}
            </div>
        </div>
    )
}

export default Home