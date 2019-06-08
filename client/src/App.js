import React, { useState } from "react";
import logo from "./logo.svg";
import Form from "./components/signUpForm/SignUp";
import "./App.css";

function App() {
  const [formActive, updateFormActive] = useState(false);
  return (
    <div className="App">
      {/* map goes here */}
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
