import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import WorldWeather from './components/WorldWeather/WorldWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container>
        <h1>Dashboard</h1>
        <WorldWeather />
      </Container>
    </div>
  );
}

export default App;
