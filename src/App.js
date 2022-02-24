// src/App.js
import React from 'react';
import './App.css';
import foodsArr from './foods.json';

function App() {
  const [foods, setFoods] = React.useState(foodsArr);
  return (
    <div className="App">
      {foods.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="food" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
