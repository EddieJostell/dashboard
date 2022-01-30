import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './components/Container/Container';
import WorldWeather from './components/WorldWeather/WorldWeather';
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Dashboard</h1>
      </header>
      <Container>
        <div className="Dashboard">
          <WorldWeather />
          <Clock />
        </div>
      </Container>
    </div>
  );
}

export default App;
