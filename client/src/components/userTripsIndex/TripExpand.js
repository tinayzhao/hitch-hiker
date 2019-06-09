import React, {useState} from "react";
import styles from './UserTrips.module.css';
import ViewRidersDetail from './ViewRidersDetail';

const TripExpand = () => {
    const [viewRiders, updateViewRiders] = useState(false);

    const hideDetail = () => {
        updateViewRiders(false);
    };


    return (
        <>
        {(viewRiders) ? <ViewRidersDetail hideDetail={hideDetail}/> : ''}
        <div className={styles['tripExpandContainer']}>
            <button className={styles['tripExpandButton']}>Cancel Trip</button>
            <button onClick={() => updateViewRiders(true)}
                    className={styles['tripExpandButton', 'riders']}>View Riders</button>
        </div>
        </>

    );
};

export default TripExpand;
