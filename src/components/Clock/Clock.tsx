import React, { useState, useEffect } from 'react';
import './Clock.scss';
interface IClockState {
  time: string;
}

const Clock = () => {
  const [currentTime, setCurrentTime] = useState<IClockState>({ time: '' });

  const ShowTime = () => {
    let timeArray = new Date().toLocaleString().split(' ');
    let date = timeArray[0];

    return (
      <div className="date">
        <h1>{date}</h1>
      </div>
    );
  };

  useEffect(() => {
    let timeArray = new Date().toLocaleString().split(' ');
    let time = timeArray[1];
    let timer = setInterval(() => {
      setCurrentTime({ ...currentTime, time: time });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="Clock">
      <h1 className="time">{currentTime.time}</h1>
      {ShowTime()}
    </div>
  );
};

export default Clock;
