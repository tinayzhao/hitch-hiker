import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./components/signUpForm/SignUp";
import Map from "./components/map/Map";
import Trips from "./components/userTripsIndex/UserTrips";
import styles from "./App.module.css";

function App() {
  const [formActive, updateFormActive] = useState(false);
  const [cartActive, updateCartActive] = useState(false);
  return (
    <div className="App">
      {!formActive && cartActive && <Trips />}
      {!formActive && !cartActive && (
        <>
          <Map />
          <div className={styles.footer}>
            <button
              className={styles.button}
              onClick={() => {
                updateFormActive(true);
              }}
            >
              Make Trip!
            </button>
            <button
              className={styles.button}
              onClick={() => {
                updateCartActive(true);
              }}
            >
              Check your Trips!
            </button>
          </div>
        </>
      )}
      {formActive && !cartActive && <Form />}
    </div>
  );
}

export default App;
