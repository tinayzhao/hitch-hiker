import React, { useState } from "react";
import styles from './UserTrips.module.css';
import TripsIndexItem from './TripsIndexItem';

const Trips = () => {
    // const [name, updateName] = useState(``);
    // const [destination, updateDestination] = useState(``);
    // const [leaveDate, updateLeaveDate] = useState(``);
    // const [returnDate, updateReturnDate] = useState(``);

    return (
        <div className={styles['tripsContainer']}>
            <h1>All Trips</h1>
            <TripsIndexItem />

            
        </div>
        // <form
        //     onSubmit={e => {
        //         e.preventDefault();
        //         console.log(name);
        //     }}
        // >
        //     <input
        //         type={`name`}
        //         onChange={e => {
        //             updateName(e.target.value);
        //         }}
        //     />
        //     <input />
        //     <input />
        //     <input />
        //     <input type={`submit`} />
        // </form>
    );
};

export default Trips;
