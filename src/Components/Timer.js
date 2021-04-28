import React, { Component, useEffect, useState } from 'react';

export function Timer(props){
    const [secondsLeft, setSecondsLeft] = useState(props.duration);

    useEffect(() => {
        const interval = setInterval(() => {
            console.count(props.name);
            setSecondsLeft(secondsLeft - 1)
        }, 1000);
        return () => clearInterval(interval);
    })

    const time = `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`;
    return (
        <div>{props.name}: {time}</div>
    )
}