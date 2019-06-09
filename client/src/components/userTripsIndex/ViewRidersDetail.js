import React, { useState } from "react";
import styles from './UserTrips.module.css';
import RiderReview from './RiderReview';


const ViewRidersDetail = ({hideDetail}) => {

    return (
        <div className={styles.viewContainer}>
            <div className={styles.detailHeader}>
                <div>Kick Riders</div>
                <div className={styles.detailClose} onClick={() => hideDetail()}>X</div>
            </div>
            <div className={styles.riderIndex}>
            <RiderReview />
            </div>
        </div>
 
    );
};

export default ViewRidersDetail;
