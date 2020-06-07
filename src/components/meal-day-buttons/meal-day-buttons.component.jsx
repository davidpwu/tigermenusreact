import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./meal-day-buttons.component.jsx";

const MealDayButtons = ({mealDay, setMealDay}) => (
  <ButtonGroup 
    variant="contained" 
    // color="primary" 
    aria-label="text primary button group" 
    className="meal-day-buttons"
    disableElevation
  >
    <Button onClick={() => setMealDay("sunday")}>
      {mealDay === "sunday" ? <strong>Sun</strong> : "Sun"}
    </Button> 
    <Button onClick={() => setMealDay("monday")}>
      {mealDay === "monday" ? <strong>Mon</strong> : "Mon"}
    </Button> 
    <Button onClick={() => setMealDay("tuesday")}>
      {mealDay === "tuesday" ? <strong>Tue</strong> : "Tue"}
    </Button> 
    <Button onClick={() => setMealDay("wednesday")}>
      {mealDay === "wednesday" ? <strong>Wed</strong> : "Wed"}
    </Button> 
    <Button onClick={() => setMealDay("thursday")}>
      {mealDay === "thursday" ? <strong>Thu</strong> : "Thu"}
    </Button> 
    <Button onClick={() => setMealDay("friday")}>
      {mealDay === "friday" ? <strong>Fri</strong> : "Fri"}
    </Button> 
    <Button onClick={() => setMealDay("saturday")}>
      {mealDay === "saturday" ? <strong>Sat</strong> : "Sat"}
    </Button> 
  </ButtonGroup>
)

export default MealDayButtons;
