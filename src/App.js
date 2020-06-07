import React from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import Menus from "./components/menus/menus.component";
import Footer from "./components/footer/footer.component";

import {b, l, d} from "./testMenus";

const weekdayArr = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

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
    // fetch("https://tigermenus.herokuapp.com/api2")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({tmData: data}))

    // Test Data
    const testData = [b, l, d];
    this.setState({tmData: testData});

    this.setState({mealTime: "breakfast"});
    this.setState({mealDay: weekdayArr[new Date().getDay()]});
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
        tmDataForMealTimeAndDay = tmDataForMealTime[0];
        break;
      case "monday":
        tmDataForMealTimeAndDay = tmDataForMealTime[1];
        break;
      case "tuesday":
        tmDataForMealTimeAndDay = tmDataForMealTime[2];
        break;
      case "wednesday":
        tmDataForMealTimeAndDay = tmDataForMealTime[3];
        break;
      case "thursday":
        tmDataForMealTimeAndDay = tmDataForMealTime[4];
        break;
      case "friday":
        tmDataForMealTimeAndDay = tmDataForMealTime[5];
        break;
      case "saturday":
        tmDataForMealTimeAndDay = tmDataForMealTime[6];
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
