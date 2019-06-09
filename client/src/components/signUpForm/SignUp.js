import React, { useState } from "react";
import styles from "./SignUp.module.css";

const Form = () => {
  const [name, updateName] = useState(``);
  const [destination, updateDestination] = useState(``);
  const [leaveDate, updateStartDate] = useState(``);
  const [returnDate, updateReturnDate] = useState(``);
  const [tripDuration, updateTripDuration] = useState(``);
  const [seats, updateSeats] = useState(0);
  const [departureTime, updateDepartureTime] = useState(``);

  return (
    <div className={styles.formContainer}>
      
    <form
      className={styles.container}
      onSubmit={e => {
        e.preventDefault();
        console.log(name);
        console.log(destination);
        console.log(leaveDate);
        // console.log(returnDate);
        console.log(tripDuration);
        console.log(seats);
      }}
    >
        <div className={styles.formInputContainer}>
      {name !== `` && <label for={`name`}>Name</label>}
      <input
        className={styles.input}
        type='text'
        placeholder={`Name`}
        name={`name`}
        onChange={e => {
          updateName(e.target.value);
        }}
      />
      {/* <label for={`destination`}>Destination</label> */}
      <input
        className={styles.input}
        placeholder={`Destination`}
        type={`text`}
        name={`destination`}
        onChange={e => {
          updateDestination(e.target.value);
        }}
      />
      {/* <div className={styles.inputDateWrapper}> */}
      <label className={styles.dateLabel}></label>
      <input
        className={styles.input}
        placeholder={`Start Date`}
        type={`date`}
        name={`startDate`}
        onChange={e => {
          updateStartDate(e.target.value);
        }}
      />

      {/* </div> */}
      {/* <div className={styles.inputDateWrapper}> */}
      <label className={styles.dateLabel}></label>
      <input
        className={styles.input}
        type={`date`}
        placeholder={`Return Date`}
        name={`returnDate`}
        onChange={e => {
          updateReturnDate(e.target.value);
        }}
      />
      {/* </div> */}
      {leaveDate === returnDate && leaveDate !== `` && (
        <>
          <label for={`duration`}>Trip Duration </label>

          <input
            className={styles.input}
            type={`text`}
            name={`duration`}
            onChange={e => {
              updateTripDuration(e.target.value);
            }}
          />
        </>
      )}
      {/* <label for={`seats`}>Seats</label> */}

          <input
            className={styles.input}
            type={`time`}
            placeholder={`Departure time`}
            name={`time`}
            onChange={e => {
              updateDepartureTime(e.target.value);
            }}
          />

      <input
        className={styles.input}
        placeholder={`Seats Available`}
        type={`number`}
        name={`seats`}
        onChange={e => {
          updateSeats(e.target.value);
        }}
      />
      </div>
      <input type={`submit`} className={styles.submit} />
      <button className={styles.back}>Back</button>
    </form>
    </div>
  );
};

export default Form;
