import React from "react";

import Grid from "@material-ui/core/Grid";

import DiningHallMenu from "../dining-hall-menu/dining-hall-menu.component";

import "./menus.styles.scss";

const Menus = ({tmDataForMealTimeAndDay}) => (
  <div className="menus">
    <Grid container spacing={1}>
      <DiningHallMenu 
        diningHallName="Wu / Wilcox" 
        diningHallFoodData={tmDataForMealTimeAndDay ? tmDataForMealTimeAndDay[0] : []} 
      />
      <DiningHallMenu 
        diningHallName="CJL" 
        diningHallFoodData={tmDataForMealTimeAndDay ? tmDataForMealTimeAndDay[1] : []} 
      />
      <DiningHallMenu 
        diningHallName="Whitman" 
        diningHallFoodData={tmDataForMealTimeAndDay ? tmDataForMealTimeAndDay[2] : []} 
      />
      <DiningHallMenu 
        diningHallName="Ro / Ma" 
        diningHallFoodData={tmDataForMealTimeAndDay ? tmDataForMealTimeAndDay[3] : []} 
      />
      <DiningHallMenu 
        diningHallName="Forbes" 
        diningHallFoodData={tmDataForMealTimeAndDay ? tmDataForMealTimeAndDay[4] : []} 
      />
      <DiningHallMenu 
        diningHallName="Grad" 
        diningHallFoodData={tmDataForMealTimeAndDay ? tmDataForMealTimeAndDay[5] : []} 
      />
    </Grid>
  </div>
)

export default Menus;
