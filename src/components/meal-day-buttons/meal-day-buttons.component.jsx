import React from "react";

import Button from "@material-ui/core/Button";

import "./meal-day-buttons.component.jsx";

const dayAbbrev = {
  "sunday": "Sun",
  "monday": "Mon",
  "tuesday": "Tue",
  "wednesday": "Wed",
  "thursday": "Thu",
  "friday": "Fri",
  "saturday": "Sat",
};

const weekdayArr = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
const today = weekdayArr[new Date().getDay()];
let dayMap;
switch (today) {
  case "sunday":
    dayMap = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    break;
  case "monday":
    dayMap = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    break;
  case "tuesday":
    dayMap = ["tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "monday"];
    break;
  case "wednesday":
    dayMap = ["wednesday", "thursday", "friday", "saturday", "sunday", "monday", "tuesday"];
    break;
  case "thursday":
    dayMap = ["thursday", "friday", "saturday", "sunday", "monday", "tuesday", "wednesday"];
    break;
  case "friday":
    dayMap = ["friday", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday"];
    break;
  case "saturday":
    dayMap = ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    break;
  default: 
    break;
}

const MealDayButtons = ({mealDay, setMealDay}) => (
  <div className="meal-day-buttons">
    <Button onClick={() => setMealDay(dayMap[0])}>
      {mealDay === dayMap[0] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[0]]}</strong> : dayAbbrev[dayMap[0]]}
    </Button> 
    <Button onClick={() => setMealDay(dayMap[1])}>
      {mealDay === dayMap[1] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[1]]}</strong> : dayAbbrev[dayMap[1]]}
    </Button> 
    <Button onClick={() => setMealDay(dayMap[2])}>
      {mealDay === dayMap[2] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[2]]}</strong> : dayAbbrev[dayMap[2]]}
    </Button> 
    <Button onClick={() => setMealDay(dayMap[3])}>
      {mealDay === dayMap[3] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[3]]}</strong> : dayAbbrev[dayMap[3]]}
    </Button> 
    <Button onClick={() => setMealDay(dayMap[4])}>
      {mealDay === dayMap[4] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[4]]}</strong> : dayAbbrev[dayMap[4]]}
    </Button> 
    <Button onClick={() => setMealDay(dayMap[5])}>
      {mealDay === dayMap[5] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[5]]}</strong> : dayAbbrev[dayMap[5]]}
    </Button> 
    <Button onClick={() => setMealDay(dayMap[6])}>
      {mealDay === dayMap[6] ? <strong style={{fontSize: 18}}>{dayAbbrev[dayMap[6]]}</strong> : dayAbbrev[dayMap[6]]}
    </Button> 
  </div>
)

export default MealDayButtons;
