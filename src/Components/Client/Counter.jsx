"use client"
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown';

const Counter = () => {

    const [giveawayDate, setGiveawayDate] = useState(null);

    useEffect(() => {
        // Fetch the "created at" date from MongoDB
        const createdAtDate = new Date('2023-07-05T17:04:58.341+00:00'); // Replace with your actual fetched date

        // Calculate the giveaway date (2 days after the created date)
        const giveawayDate = new Date(createdAtDate);
        giveawayDate.setDate(giveawayDate.getDate() + 2);

        setGiveawayDate(giveawayDate);
    }, []);

    if (!giveawayDate) {
        return <span>Loading...</span>;
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Giveaway has ended!</span>;
        } else {
            return (
                <span>
                    {days} days {hours}h {minutes}m {seconds}s
                </span>
            );
        }
    };

    const remainingTime = giveawayDate.getTime() - Date.now();

    return (
        <Countdown date={Date.now() + remainingTime} renderer={renderer} />
    )
}

export default Counter