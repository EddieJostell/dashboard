import React, { useState, useEffect } from 'react';
import './Clock.scss';
interface IClockState {
  time: string;
}

const Clock = () => {
  const [currentTime, setCurrentTime] = useState<IClockState>({ time: '' });

  const ShowTimeDate = () => {
    let timeArray = new Date().toLocaleString().split(' ');
    let date = timeArray[0];

    date = date.substring(0, date.length - 1);

    return (
      <div className='date'>
        {/*  <h1 className='date-title'>Current date</h1> */}
        <h2>{date}</h2>
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
    <div className='Clock'>
      <h1>Current time</h1>
      <h1 className='time'>{currentTime.time}</h1>
      {ShowTimeDate()}
    </div>
  );
};

export default Clock;
