import React from "react";
import '../Recipe.css'
import RecipeCard from "./RecipeCard";

const Home = ({foodData}) => {
   
      const renderData = foodData.map((foodObject) => {
        return(
            <RecipeCard
                key={foodObject.id}
                category={foodObject.category}
                image={foodObject.image}
                title={foodObject.title}
                time={foodObject.time}
                ingredients={foodObject.ingredients}
                instructions={foodObject.instructions}
            />
        )
      })
      console.log(renderData)

    return(
        <div className="home">
            <div className="recipeContainer">
                {renderData}
            </div>
        </div>
    )
}

export default Home