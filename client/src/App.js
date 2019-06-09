import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./components/signUpForm/SignUp";
import Map from "./components/map/Map";
import "./App.css";

function App() {
  const [formActive, updateFormActive] = useState(false);
  return (
    <div className="App">
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
