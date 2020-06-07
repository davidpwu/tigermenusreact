import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

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

  render() {
    const tmData = this.state.tmData;
    const mealTime = this.state.mealTime;
    const mealDay = this.state.mealDay;

    let tmDataForMealTime;
    switch (mealTime) {
      case "breakfast":
        tmDataForMealTime = tmData[0];
        break;
      case "lunch":
        tmDataForMealTime = tmData[1];
        break;
      case "dinner":
        tmDataForMealTime = tmData[2];
        break;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1><a href="/">TigerMenus</a></h1>
          <Link href="https://github.com/axu2/tiger-menus">
            Code (GitHub)
          </Link>
          
          <div>
            <Button 
              color="primary"
              onClick={() => this.setState({mealTime: "breakfast"})}
            >
              Breakfast
            </Button>
            <Button 
              color="primary"
              onClick={() => this.setState({mealTime: "lunch"})}
            >
              Lunch
            </Button>
            <Button 
              color="primary"
              onClick={() => this.setState({mealTime: "dinner"})}
            >
              Dinner
            </Button>
          </div>

          <div>
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "sunday"})}
            >
              Sun
            </Button> 
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "monday"})}
            >
              Mon
            </Button> 
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "tuesday"})}
            >
              Tue
            </Button> 
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "wednesday"})}
            >
              Wed
            </Button> 
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "thursday"})}
            >
              Thu
            </Button> 
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "friday"})}
            >
              Fri
            </Button> 
            <Button 
              color="primary"
              onClick={() => this.setState({mealDay: "saturday"})}
            >
              Sat
            </Button> 
          </div>
        </header>

        <hr /> 

        <h1>Selected MealTime: {mealTime}</h1>
        <h1>Selected MealDay: {mealDay}</h1>
        {
          tmDataForMealTime 
          ? tmDataForMealTime.map((item) => (
            <p>{item}</p>
          )) 
          : <h1>No Food for You</h1>
        }

        <hr />
        
        <footer>
          <p>To add the site to your phone's homescreen, open the <a href="/">homepage</a></p>
          <p>On iPhone, click the <img height="24" src="/static/action.png" alt="options" /> button on the bottom of Safari</p>
          <p>On Android, click on the <span class="glyphicon glyphicon-option-vertical" aria-hidden="false"></span> button on the top right of Chrome</p>
          <p>Click "Add to Home Screen" <img src="/static/favicons/favicon-32x32.png" alt="" /></p>
          <h4><b><a href="/install">Install Instructions (Screenshots)</a></b></h4>
        </footer>
        
        <hr />

        <footer>
          <p><a href="https://dining.princeton.edu/">Official Campus Dining Website</a></p>
          <p>Order a <a href="https://campusdining.princeton.edu/lunchtogo/">bag lunch!</a></p>
          <p><a href="https://dining.princeton.edu/where-eat/hours-operation">Campus Dining Hours</a></p>
          <p><a href="https://services.jsatech.com/login.php?cid=69">TigerCard Balance</a> (Swipes+Paw Points+Dining Points)</p>
          <p>To get on freefood listserv, email "listserv at princeton dot edu" with "subscribe freefood" in the body.</p>
        </footer>

        <hr />

        <footer>      
          <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd-i9YUoMUk_xJ6l3cNoSl04KKymQ8CAHID9CbwhJpgNn-2QQ/viewform?usp=sf_link">
            Feedback
          </a></p>
          <p><a href="https://github.com/axu2/tiger-menus">Code (GitHub)</a> Please contribute!</p>
          <p><a href="/about">About</a></p>
        </footer>

      </div>
    );
  }
}

export default App;
