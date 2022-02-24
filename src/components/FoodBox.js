import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.foods.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.foods.image} height={60} alt="food" />
        <p>Calories: {props.foods.calories}</p>
        <p>Servings: {props.foods.servings}</p>
        <p>
          <b>Total Calories: {props.foods.calories * props.foods.servings} </b>{' '}
          kcal
        </p>
        <Button type="primary" onClick={() => props.deletedFood(props.foods)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
