import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./components/signUpForm/SignUp";
import Map from "./components/map/Map";
import "./App.css";
import firebase from "./firebaseConfig.js"
import Trips from './components/userTripsIndex/UserTrips';

function App() {
  const [formActive, updateFormActive] = useState(false);
  var markers = firebase.database().ref('submit');
  markers.on('child_added', function(snapshot) {
    markers.remove(function(err) {
      if (err) {
        console.warn(err);
      }
    });
    updateFormActive(false);
  })
  return (
    
    <div className="App">
      {/* <Trips /> */}
      {!formActive && <Map />}
      {formActive && <Form />}
      {!formActive && (
        <button
          onClick={() => {
            updateFormActive(true);
          }}
        >
          Make Trip!
        </button>
      )}
    </div>
  );
}

export default App;