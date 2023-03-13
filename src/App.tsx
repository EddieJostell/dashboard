import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './components/Container/Container';
import WorldWeather from './components/WorldWeather/WorldWeather';
import Clock from './components/Clock/Clock';
import { TestComponent } from './components/TestComponent/TestComponent';
import { Country } from './components/Country/Country';
import { findByLabelText } from '@testing-library/react';
import { motion } from 'framer-motion';

function App() {
  const [countryArray, setCountryArray] = useState<any>([]);
  const [savedCountries, setSaveddCountries] = useState<any>([]);

  const array1: any[] = [
    {
      id: 0,
      CountryName: 'Somaliland',
      CapitalName: 'Hargeisa',
      HiddenCountry: true,
    },
    {
      id: 1,
      CountryName: 'South Georgia and South Sandwich Islands',
      CapitalName: 'King Edward Point',
      HiddenCountry: true,
    },
    {
      id: 2,
      CountryName: 'French Southern and Antarctic Lands',
      CapitalName: 'Port-aux-FranÃ§ais',
      HiddenCountry: true,
    },
    {
      id: 3,
      CountryName: 'Palestine',
      CapitalName: 'Palestinian occupied part of Jerusalem',
      HiddenCountry: true,
    },
    {
      id: 4,
      CountryName: 'Aland Islands',
      CapitalName: 'Mariehamn',
      HiddenCountry: true,
    },
    {
      id: 5,
      CountryName: 'Nauru',
      CapitalName: 'Yaren',
      HiddenCountry: true,
    },
    {
      id: 6,
      CountryName: 'Saint Martin',
      CapitalName: 'Marigot',
      HiddenCountry: true,
    },
    {
      id: 7,
      CountryName: 'Tokelau',
      CapitalName: 'Atafu',
      HiddenCountry: true,
    },
    {
      id: 8,
      CountryName: 'Western Sahara',
      CapitalName: 'El-AaiÃºn',
      HiddenCountry: true,
    },
    {
      id: 9,
      CountryName: 'Afghanistan',
      CapitalName: 'Kabul',
      HiddenCountry: true,
    },
    {
      id: 10,
      CountryName: 'Albania',
      CapitalName: 'Tirana',
      HiddenCountry: true,
    },
    {
      id: 11,
      CountryName: 'Algeria',
      CapitalName: 'Algiers',
      HiddenCountry: true,
    },
    {
      id: 12,
      CountryName: 'American Samoa',
      CapitalName: 'Pago Pago',
      HiddenCountry: true,
    },
    {
      id: 13,
      CountryName: 'Andorra',
      CapitalName: 'Andorra la Vella',
      HiddenCountry: true,
    },
    {
      id: 14,
      CountryName: 'Angola',
      CapitalName: 'Luanda',
      HiddenCountry: true,
    },
  ];

  const showCountry = () => {
    const random = array1[Math.floor(Math.random() * array1.length)];
    console.log('random', random);
    countryArray.push(random);
    setCountryArray([...countryArray]);
    console.log('countryArray', countryArray);
  };

  const sendToAtlas = (value: any, index: number) => {
    setSaveddCountries((currentCountries: any) => [...currentCountries, value]);
    setCountryArray(countryArray.filter((value: any, i: any) => i !== index));
  };

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
          <TestComponent />
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <button onClick={showCountry}>Show me a country</button>
            {countryArray.map((qwerty: any, index: number) => {
              return (
                <Country
                  key={index}
                  captial={qwerty.CapitalName}
                  country={qwerty.CountryName}
                  hidden={qwerty.HiddenCountry}
                  sendToAtlas={() => sendToAtlas(qwerty, index)}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
