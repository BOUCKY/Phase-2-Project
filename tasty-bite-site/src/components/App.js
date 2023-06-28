import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import AddRecipe from './AddRecipe';
import Favorites from './Favorites';
import CategoryNav from './Categorynav';
import Dinners from './Dinners';
import Desserts from './Desserts';
import Drinks from './Drinks';
import Lunch from './Lunch';
import Breakfasts from './Breakfasts';

function App() {

  const [foodData, setFoodData] = useState([]);

  // These filter the recipe cards by food category and favorites.
  const favoriteFoods = foodData.filter(food => {
    return food.favorite 
  })
  const allDrinks = foodData.filter(food => {
    return food.category.toLowerCase() === "drinks"
  })
  const allDinners = foodData.filter(food => {
    return food.category.toLowerCase() === "dinner"
  })
  const allLunches = foodData.filter(food => {
    return food.category.toLowerCase() === "lunch"
  })
  const allDesserts = foodData.filter(food => {
    return food.category.toLowerCase() === "dessert"
  })
  const allBreakfast = foodData.filter(food => {
    return food.category.toLowerCase() === "breakfast"
  })

  // Put all of the food categories together to pass down to Home so we can display the recipe cards based on their category
  const allFoods = {allDrinks, allBreakfast, allLunches, allDinners, allDesserts}

  // Fetch the food data from the db.json. Use useEffect to ge them to display on the page
  useEffect(() => {
      fetch('http://localhost:3000/recipes')
        .then((response) => response.json())
        .then((data) => setFoodData(data))
    }, [])
  
  // Displays just the favorited recipe cards on the favorite page
  function changeFavorite(id){
    console.log("hello")
    const foods = [...foodData]
    const foodFound = foods.find(item => {
      return item.id === id
    })
    foodFound.favorite = !foodFound.favorite
    setFoodData(foods)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1 className='tasty-bites'>Tasty Bites</h1>
        <CategoryNav />
        <Routes>
          <Route path='/' element={<Home changeFavorite={changeFavorite} allFoods={allFoods} />} />
          <Route path='addrecipe' element={<AddRecipe setFoodData={setFoodData} />} />
          <Route path='favorites' element={<Favorites favoriteFoods={favoriteFoods} changeFavorite ={changeFavorite} allFoods={allFoods} />} />

          {/* Everything below are routes to show just one food category at a time */}
          <Route path='dinners' element={<Dinners allDinners = {allDinners} changeFavorite = {changeFavorite}/>}/>
          <Route path='desserts' element={<Desserts allDesserts = {allDesserts} changeFavorite = {changeFavorite} />} />
          <Route path='lunch' element={<Lunch allLunches = {allLunches} changeFavorite = {changeFavorite}/>} />
          <Route path='drinks' element={<Drinks allDrinks = {allDrinks} changeFavorite = {changeFavorite}/>} />
          <Route path='breakfast' element={<Breakfasts allBreakfast = {allBreakfast} changeFavorite = {changeFavorite}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
