import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import AddRecipe from './AddRecipe';
import Favorites from './Favorites';

function App() {

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/recipes')
        .then((response) => response.json())
        .then((data) => setFoodData(data))
    }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home foodData={foodData} />} />
          <Route path='addrecipe' element={<AddRecipe setFoodData={setFoodData}/>} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
