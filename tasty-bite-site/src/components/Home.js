import React from "react";
import RecipeCard from "./RecipeCard";

const Home = ({foodData}) => {

    //   console.log(foodData)
   
      const renderData = foodData.map((foodObject) => {
        return(
            <RecipeCard
                key={foodObject.id}
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
            {renderData}
        </div>
    )
}

export default Home