// src/App.js
import React from 'react';
import './App.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox'

function App() {
  const [foods, setFoods] = React.useState(foodsArr);

  
  return (
    <div className="App">
      {foods.map((food) => {
        return (
          <FoodBox foods={food} />
        );
      })}
    </div>
  );
}

export default App;
