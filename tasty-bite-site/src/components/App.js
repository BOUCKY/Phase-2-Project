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

function App() {

  const [foodData, setFoodData] = useState([]);

  const favoriteFoods = foodData.filter(food => {
    return food.favorite 
  })

  const allDrinks = foodData.filter(food => {
    return food.category === "drinks"
  })

  const allDinners = foodData.filter(food => {
    return food.category === "dinner"
  })

  const allLunches = foodData.filter(food => {
    return food.category === "lunch"
  })

  const allDesserts = foodData.filter(food => {
    return food.category === "dessert"
  })

  useEffect(() => {
      fetch('http://localhost:3000/recipes')
        .then((response) => response.json())
        .then((data) => setFoodData(data))
    }, [])
  

  function changeFavorite(id){
    console.log("hello")
    const foods = [...foodData]
    const foodFound = foods.find(item => {
      return item.id === id
    })
    foodFound.favorite = !foodFound.favorite
    setFoodData(foods)
    // const foods = foodData.map(food => {
    //   if (food.id === id){
    //     return {...food, favorite: !food.favorite}
    //   }
    //   else{
    //     return food
    //   }
    // })
    // setFoodData(foods)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <CategoryNav />
        <Routes>
          <Route path='/' element={<Home foodData={foodData} changeFavorite={changeFavorite}/>} />
          <Route path='addrecipe' element={<AddRecipe setFoodData={setFoodData}/>} />
          <Route path='favorites' element={<Favorites favoriteFoods={favoriteFoods} changeFavorite ={changeFavorite}/>} />
          <Route path='dinners' element={<Dinners allDinners = {allDinners} changeFavorite = {changeFavorite}/>}/>
          <Route path='desserts' element={<Desserts allDesserts = {allDesserts} changeFavorite = {changeFavorite} />} />
          <Route path='lunch' element={<Lunch allLunches = {allLunches} changeFavorite = {changeFavorite}/>} />
          <Route path='drinks' element={<Drinks allDrinks = {allDrinks} changeFavorite = {changeFavorite}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
