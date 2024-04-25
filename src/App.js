// Stopwatch.js
import React, { useState, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  // Function to start or stop the stopwatch
  const startStopwatch = () => {
    if (!isRunning) {
      // Start the stopwatch
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      // Stop the stopwatch
      clearInterval(intervalRef.current);
    }
    // Toggle the running state
    setIsRunning(!isRunning);
  };

  // Function to reset the stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Function to format the time in MM:SS format
  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time">Time: {formatTime()}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={startStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
