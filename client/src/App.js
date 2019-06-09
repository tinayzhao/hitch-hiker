import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./components/signUpForm/SignUp";
import Map from "./components/map/Map";
import styles from "./App.module.css";
import firebase from "./firebaseConfig.js";
import Trips from "./components/userTripsIndex/UserTrips";
import { AppContextProvider } from "./components/context/Context.js";

function App() {
  const [formActive, updateFormActive] = useState(false);
  const [cartActive, updateCartActive] = useState(false);
  const markers = firebase.database().ref("submit");
  markers.on("child_added", function(snapshot) {
    markers.remove(function(err) {
      if (err) {
        console.warn(err);
      }
    });
    updateFormActive(false);
  });
  return (
    <div className="App">
      <AppContextProvider>
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
      </AppContextProvider>
    </div>
  );
}

export default App;
