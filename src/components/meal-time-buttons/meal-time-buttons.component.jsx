import React from "react";

import Button from "@material-ui/core/Button";

import "./meal-time-buttons.component.jsx";

const MealTimeButtons = ({mealTime, setMealTime}) => (
  <div className="meal-time-buttons">
    <Button onClick={() => setMealTime("breakfast")}>
      {mealTime === "breakfast" ? <strong style={{fontSize: 18}}>Breakfast</strong> : "Breakfast"}
    </Button>
    <Button onClick={() => setMealTime("lunch")}>
      {mealTime === "lunch" ? <strong style={{fontSize: 18}}>Lunch</strong> : "Lunch"}
    </Button>
    <Button onClick={() => setMealTime("dinner")}>
      {mealTime === "dinner" ? <strong style={{fontSize: 18}}>Dinner</strong> : "Dinner"}
    </Button>
  </div>
)

export default MealTimeButtons;
