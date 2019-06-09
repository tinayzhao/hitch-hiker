import React, { useState } from "react";
import styles from "./SignUp.module.css";
import firebase from "./../../firebaseConfig.js";

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

        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setMarkers(pos);
        });

        function setMarkers(pos) {
          const options = {
            center: { lat: 37.7876, lng: -122.3966 },
            zoom: 5,
          };

          var request = {
            query: destination,
            fields: ["name", "geometry"],
          };

          var new_pos = {
           lat: null,
           lng: null,
          }

          var trip = {
            pos: null,
            old_pos: pos,
            name: null,
            driver: name,
          };

          var snap;
          var hold = document.createElement("div");
          var map = new window.google.maps.Map(hold, options);
          var service = new window.google.maps.places.PlacesService(map);
          service.findPlaceFromQuery(request, function(results, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                snap = results[i].geometry.location;
                new_pos.lat = snap.lat();
                new_pos.lng = snap.lng();
                trip.name = results[i].name;
                trip.pos = new_pos;
                //console.log(results[i].geometry.location.lat());
                createMarker(trip);
              }
            }
            signalSubmit();
          });

          function createMarker(place) {
            firebase
              .database()
              .ref("marker")
              .push(place, function(err) {
                if (err) {
                  console.warn(err);
                }
              });
          }

          function signalSubmit() {
            firebase
              .database()
              .ref("submit")
              .push(1, function(err) {
                if (err) {
                  console.warn(err);
                }
              });
          }
        }
        

        e.preventDefault();
      }}
    >
      <div className={styles.carLogoContainer}>
          <img className={styles.carLogo} src='/car.png'/>
      </div>
      <h1 className={styles.formHeader}>Schedule a Trip!</h1>
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
          const options = {
            center: { lat: 37.7876, lng: -122.3966 },
            zoom: 5,
          };
          var hold = document.createElement("div");
          var map = new window.google.maps.Map(hold, options);
          var service = new window.google.maps.places.PlacesService(map);
          console.log(e.target.value);
          updateDestination(e.target.value);
        }}
      />
      {/* <div className={styles.inputDateWrapper}> */}
      <label className={styles.dateLabel}></label>
      <input
        className={styles.inputDate}
        placeholder={`Departure Date`}
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
        className={styles.inputDate}
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
            className={styles.inputDate}
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
