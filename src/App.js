// src/App.js
import React from 'react';
import './App.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  const [filteredFoods, setFilteredFoods] = React.useState(foods);

  const deletedFood = (foodToRemove) => {
    let newFoodArray = foods.filter((food) => {
      return foodToRemove !== food;
    });
    setFoods(newFoodArray);
    setFilteredFoods(newFoodArray);
  };

  return (
    <div className="App">
      <AddFoodForm foodsArr={foods} setFoodsArr={setFoods} />
      <Search props={foods} callback={setFilteredFoods} />
      {filteredFoods.map((food) => {
        return <FoodBox foods={food} deletedFood={deletedFood} />;
      })}
    </div>
  );
}

export default App;
