import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./meal-time-buttons.component.jsx";

const MealTimeButtons = ({mealTime, setMealTime}) => (
  <ButtonGroup 
    variant="contained" 
    // color="primary" 
    aria-label="text primary button group"
    disableElevation
  >
    <Button onClick={() => setMealTime("breakfast")}>
      {mealTime === "breakfast" ? <strong>Breakfast</strong> : "Breakfast"}
    </Button>
    <Button onClick={() => setMealTime("lunch")}>
      {mealTime === "lunch" ? <strong>Lunch</strong> : "Lunch"}
    </Button>
    <Button onClick={() => setMealTime("dinner")}>
      {mealTime === "dinner" ? <strong>Dinner</strong> : "Dinner"}
    </Button>
  </ButtonGroup>
)

export default MealTimeButtons;
