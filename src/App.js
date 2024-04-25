import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  // Cleanup interval when component unmounts
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    setIsRunning(!isRunning);
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">{formatTime()}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
