import React from "react";
// import Form from "./components/signUpForm/SignUp";
import Trips from './components/userTripsIndex/UserTrips';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Trips />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
