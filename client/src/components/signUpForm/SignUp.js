import React, { useState } from "react";
import styles from "./SignUp.module.css";
import firebase from "./../../firebaseConfig.js"

const Form = () => {
  const [name, updateName] = useState(``);
  const [destination, updateDestination] = useState(``);
  const [leaveDate, updateStartDate] = useState(``);
  const [returnDate, updateReturnDate] = useState(``);
  const [tripDuration, updateTripDuration] = useState(``);
  const [seats, updateSeats] = useState(0);


  return (
    <form
      className={styles.container}
      onSubmit={e => {
        
        var options: {
          center: { lat: 37.7876, lng: -122.3966 },
          zoom: 5,
        };

        var request = {
          query: destination,
          fields: ['name', 'geometry'],
        };

        var location = {
          lat: null,
          lng: null,
          name: destination,
          driver: name,
        };

        var snap;
        var hold = document.createElement('div');
        var map = new window.google.maps.Map(hold, options);
        var service = new window.google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, function(results, status) {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              snap = results[i].geometry.location;
              location.lat = snap.lat();
              location.lng = snap.lng();
              location.name = results[i].name;
              //console.log(results[i].geometry.location.lat());
              createMarker(location)
            }
          
          }
          signalSubmit();
        });

        // var ref = firebase.database().ref('marker').push(destination, function(err) {
        //   if (err) {  // Data was not written to firebase.
        //     console.warn(err);
        //   }
        // });

        function createMarker(place) {
          firebase.database().ref('marker').push(place, function(err) {
            if (err) {
              console.warn(err);
            }
          });
        }

        function signalSubmit() {
          firebase.database().ref('submit').push(1, function(err) {
            if (err) {
              console.warn(err);
            }
          });
        }


        e.preventDefault();
        //console.log(name);
        //console.log(destination);
        //console.log(leaveDate);
        // console.log(returnDate);
        //console.log(tripDuration);
        //console.log(seats);
      }}
    >
      {name !== `` && <label for={`name`}>Name</label>}
      <input
        className={styles.input}
        type={`name`}
        placeholder={`name`}
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
          var options: {
            center: { lat: 37.7876, lng: -122.3966 },
            zoom: 5,
          };
          var hold = document.createElement('div');
          var map = new window.google.maps.Map(hold, options);
          var service = new window.google.maps.places.PlacesService(map);
          console.log(e.target.value);
          updateDestination(e.target.value);
        }}
      />
      {/* <div className={styles.inputDateWrapper}> */}
      <label for={`startDate`}>Start</label>
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
      <label for={`returnDate`} className={styles.dateLabel}>
        Return
      </label>
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
        placeholder={`number of seats`}
        type={`number`}
        name={`seats`}
        onChange={e => {
          updateSeats(e.target.value);
        }}
      />
      <input type={`submit`} className={styles.submit} />
    </form>
  );
};

export default Form;
