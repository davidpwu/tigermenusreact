import React from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import Menus from "./components/menus/menus.component";
import Footer from "./components/footer/footer.component";

// import {b, l, d} from "./testMenus";

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
    dayMap = {
      "sunday": 0, "monday": 1, "tuesday": 2, "wednesday": 3, "thursday": 4, "friday": 5, "saturday": 6,
    }
    break;
  case "monday":
    dayMap = {
      "monday": 0, "tuesday": 1, "wednesday": 2, "thursday": 3, "friday": 4, "saturday": 5, "sunday": 6,
    }
    break;
  case "tuesday":
    dayMap = {
      "tuesday": 0, "wednesday": 1, "thursday": 2, "friday": 3, "saturday": 4, "sunday": 5, "monday": 6,
    }
    break;
  case "wednesday":
    dayMap = {
      "wednesday": 0, "thursday": 1, "friday": 2, "saturday": 3, "sunday": 4, "monday": 5, "tuesday": 6,
    }
    break;
  case "thursday":
    dayMap = {
      "thursday": 0, "friday": 1, "saturday": 2, "sunday": 3, "monday": 4, "tuesday": 5, "wednesday": 6,
    }
    break;
  case "friday":
    dayMap = {
      "friday": 0, "saturday": 1, "sunday": 2, "monday": 3, "tuesday": 4, "wednesday": 5, "thursday": 6,
    }
    break;
  case "saturday":
    dayMap = {
      "saturday": 0, "sunday": 1, "monday": 2, "tuesday": 3, "wednesday": 4, "thursday": 5, "friday": 6,
    }
    break;
  default: 
    break;
}

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      tmData: [],
      mealTime: "",
      mealDay: null
    };
  }
  
  componentDidMount() {
    // Real Data
    fetch("https://tigermenus.herokuapp.com/api2")
      .then((response) => response.json())
      .then((data) => {
        this.setState({tmData: data});
      }
    )

    // Test Data
    // const testData = [b, l, d];
    // this.setState({tmData: testData});

    this.setState({mealTime: "breakfast"});
    this.setState({mealDay: today});
  }

  setMealTime = (time) => {
    this.setState({mealTime: time})
  }

  setMealDay = (day) => {
    this.setState({mealDay: day})
  }

  render() {
    let tmDataForMealTime;
    switch (this.state.mealTime) {
      case "breakfast":
        tmDataForMealTime = this.state.tmData[0];
        break;
      case "lunch":
        tmDataForMealTime = this.state.tmData[1];
        break;
      case "dinner":
        tmDataForMealTime = this.state.tmData[2];
        break;
      default:
        break;
    }

    let tmDataForMealTimeAndDay;
    switch (this.state.mealDay) {
      case "sunday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["sunday"]] : null;
        break;
      case "monday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["monday"]] : null;
        break;
      case "tuesday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["tuesday"]] : null;
        break;
      case "wednesday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["wednesday"]] : null;
        break;
      case "thursday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["thursday"]] : null;
        break;
      case "friday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["friday"]] : null;
        break;
      case "saturday":
        tmDataForMealTimeAndDay = tmDataForMealTime ? tmDataForMealTime[dayMap["saturday"]] : null;
        break;
      default: 
        break;
    }

    return (
      <div className="App">
        <Header setMealTime={this.setMealTime} setMealDay={this.setMealDay} {...this.state} />
        <Menus tmDataForMealTimeAndDay={tmDataForMealTimeAndDay} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
