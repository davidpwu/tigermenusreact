import React from "react";

import Button from "@material-ui/core/Button";

import "./meal-day-buttons.component.jsx";

const MealDayButtons = ({mealDay, setMealDay}) => (
  <div className="meal-day-buttons">
    <Button onClick={() => setMealDay("sunday")}>
      {mealDay === "sunday" ? <strong style={{fontSize: 18}}>Sun</strong> : "Sun"}
    </Button> 
    <Button onClick={() => setMealDay("monday")}>
      {mealDay === "monday" ? <strong style={{fontSize: 18}}>Mon</strong> : "Mon"}
    </Button> 
    <Button onClick={() => setMealDay("tuesday")}>
      {mealDay === "tuesday" ? <strong style={{fontSize: 18}}>Tue</strong> : "Tue"}
    </Button> 
    <Button onClick={() => setMealDay("wednesday")}>
      {mealDay === "wednesday" ? <strong style={{fontSize: 18}}>Wed</strong> : "Wed"}
    </Button> 
    <Button onClick={() => setMealDay("thursday")}>
      {mealDay === "thursday" ? <strong style={{fontSize: 18}}>Thu</strong> : "Thu"}
    </Button> 
    <Button onClick={() => setMealDay("friday")}>
      {mealDay === "friday" ? <strong style={{fontSize: 18}}>Fri</strong> : "Fri"}
    </Button> 
    <Button onClick={() => setMealDay("saturday")}>
      {mealDay === "saturday" ? <strong style={{fontSize: 18}}>Sat</strong> : "Sat"}
    </Button> 
  </div>
)

export default MealDayButtons;
