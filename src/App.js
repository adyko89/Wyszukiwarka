import React, { useState } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Recipeslist from './components/RecipesList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <Recipeslist recipes={recipes} />
    </div>
  );
}

export default App;