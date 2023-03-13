import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './components/Container/Container';
import WorldWeather from './components/WorldWeather/WorldWeather';
import Clock from './components/Clock/Clock';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <motion.h1
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.5, 1],
            transition: { duration: 1.5, delay: 0.5 },
          }}
          className='title'
        >
          Dashboard
        </motion.h1>
      </header>
      <Container>
        <div className='Dashboard'>
          <WorldWeather />
          <Clock />
        </div>
      </Container>
    </div>
  );
}

export default App;
