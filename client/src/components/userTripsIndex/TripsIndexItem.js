import React, { useState, useEffect } from "react";
import styles from './UserTrips.module.css';
import TripExpand from './TripExpand';

const TripsIndexItem = () => {
    const [expand, setExpand] = useState(false);

    const node = React.useRef(null);

    const hideExpand = (e) => {
        if (!node.current.contains(e.target)) {
            setExpand(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', hideExpand);
        return function cleanup() {
            document.removeEventListener('click', hideExpand);
        };
    });

    return (
        <div ref={node} className={styles['tripsItemContainer']}
             onClick={() => setExpand(true)}>
            <div className={styles['tripsItemLabel']}>DESTINATION:</div>
            <div className={styles['tripsItemLabel']}>START LOCATION:</div>
            <div className={styles['tripsItemLabel']}>TRIP BEGINS:</div>
            {(expand) ? <TripExpand /> : ''}
        </div>

    );
};

export default TripsIndexItem;
