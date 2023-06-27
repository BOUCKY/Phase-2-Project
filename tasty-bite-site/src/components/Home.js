import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard";

const Home = () => {

    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
          .then((response) => response.json())
          .then((data) => setFoodData(data))
      }, [])

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