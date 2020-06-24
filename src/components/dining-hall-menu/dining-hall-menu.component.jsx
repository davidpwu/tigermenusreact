import React from "react";

import Grid from "@material-ui/core/Grid";

import "./dining-hall-menu.styles.scss";

const DiningHallMenu = ({diningHallName, diningHallFoodData}) => (
  <Grid container item xs={12} sm={2} className="dining-hall-menu">
    <h2>{diningHallName}</h2>
    {
      (diningHallFoodData ? diningHallFoodData.length !== 0 : null)
      ?
      diningHallFoodData.map((item, index) => {
        if (index === 0) {
          return <div key={item}><strong>{item}</strong></div>;
        } else if (item.includes("--")) {
          return <div key={item}><strong>{item}</strong></div>;
        } else {
          return <div key={item}>{item}</div>;
        }
      })
      : 
      <p>No Data Available</p>
    }
  </Grid>
)

export default DiningHallMenu;
