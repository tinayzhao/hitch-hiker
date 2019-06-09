import React, { useState } from "react";
import styles from './UserTrips.module.css';
import logo from '../../logo.svg';


const RiderReview = () => {

    return (
        <div className={styles.riderReviewContainer}>
            <div className={styles.riderHeader}>
                <div className={styles.riderProfileCrop}>
                    <img className={styles.riderProfile} src='/favicon.ico'/>
                </div>
                <div className={styles.riderName}>Joe Schmoe</div>
            </div>
            <div className={styles.ranking}>
                <img src='/unranked.png' />
                <img src='/unranked.png' />
                <img src='/unranked.png' />
                <img src='/unranked.png' />
                <img src='/unranked.png' />
            </div>
            <button className={styles.boot}>BOOT</button>
        </div>

    );
};

export default RiderReview;
