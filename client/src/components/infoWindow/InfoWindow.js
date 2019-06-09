import React from "react";
import styles from "./InfoWindow.module.css";

const InfoWindow = ({
  driver,
  destination,
  departureDate,
  departureTime,
  returnTime,
  seats,
  action,
}) => {
  return (
    <div className={styles.container}>
      <h2>Destination:{destination}</h2>
      <h3>Driver:{driver}</h3>
      <p>Trip Date: {departureDate}</p>
      <p>Departure Time: {departureTime}</p>
      <p>Return Time: {returnTime}</p>
      <p>Seats Remaining: {seats}</p>
      <button onClick={action}>Join Ride!</button>
    </div>
  );
};

export default InfoWindow;
