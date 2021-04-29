import React, { useEffect, useRef, useState } from 'react';

function useTimer(duration) {
    const [secondsLeft, setSecondsLeft] = useState(duration);
    const secondsRef = useRef();
    secondsRef.current = secondsLeft;
    const sholdCountDown = !!secondsLeft;

    useEffect(() => {
        if(!sholdCountDown) return;
        const interval = setInterval(() => {
            setSecondsLeft(secondsRef.current - 1)
        }, 1000);
        return () => clearInterval(interval);
    },[sholdCountDown])

    return secondsLeft;
}

export function Timer(props){
    const secondsLeft = useTimer(props.duration)
    const time = `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`;
    return (
        <div>{props.name}: {time}</div>
    )
}