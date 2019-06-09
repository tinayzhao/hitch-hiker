import React from "react";
import styles from "./InfoWindow.module.css";

const InfoWindow = ({
  driver,
  destination,
  departureTime,
  returnTime,
  seats,
}) => {
  return (
    <div className={styles.container}>
      <h2>Destination:{destination}</h2>
      <h3>Driver:{driver}</h3>
      <p>Departure Time: {departureTime}</p>
      <p>Return Time: {returnTime}</p>
      <p>Seats Remaining: {seats}</p>
    </div>
  );
};

export default InfoWindow;
