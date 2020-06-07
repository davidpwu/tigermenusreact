import React from "react";

import Link from "@material-ui/core/Link";

import MealTimeButtons from "../meal-time-buttons/meal-time-buttons.component";
import MealDayButtons from "../meal-day-buttons/meal-day-buttons.component";

import "./header.styles.scss";

const Header = ({mealTime, mealDay, setMealTime, setMealDay}) => (
  <header className="header">
    <h1 className="title"><a href="/">TigerMenus</a></h1>
    <a href="https://github.com/axu2/tiger-menus" className="code-link">
      Code (GitHub)
    </a>
    <MealTimeButtons mealTime={mealTime} setMealTime={setMealTime} className="meal-time-buttons" />
    <MealDayButtons mealDay={mealDay} setMealDay={setMealDay} className="meal-day-buttons" />
  </header>
)

export default Header;
