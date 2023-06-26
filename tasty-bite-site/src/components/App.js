import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import NavBar from './Navbar';
import Home from './Home';
import AddRecipe from './AddRecipe';
import Favorites from './Favorites';

function App() {
  return (
<BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='addrecipe' element={<AddRecipe />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
