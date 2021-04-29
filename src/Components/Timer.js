import React, { useEffect, useRef, useState } from 'react';

export function useTimer(duration) {
    const [secondsLeft, setSecondsLeft] = useState(duration);
    const secondsRef = useRef();
    secondsRef.current = secondsLeft;

    useEffect(() => {
        if (!secondsRef.current) return;
        const interval = setInterval(() => {
            setSecondsLeft(secondsRef.current - 1)
        }, 1000);
        return () => clearInterval(interval);
    },[!!secondsLeft])

    return secondsLeft;
}

export function useTimerUp() {
    const [seconds, setSeconds] = useState(0);
    const secondsRef = useRef();
    secondsRef.current = seconds;

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(secondsRef.current + 1)
        }, 1000);
        return () => clearInterval(interval);
    },[])
    return seconds;
}

export function Timer(props){
    const secondsLeft = useTimer(props.duration)
    const time = `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`;
    return (
        <div>{props.name}: {time}</div>
    )
}