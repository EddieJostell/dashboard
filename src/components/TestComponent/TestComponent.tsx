import React, { useState } from 'react';
import { countries, ICountries } from '../../utils/country_capitals';

import './TestComponent.scss';

interface ICountries2 {
  CountryName: string;
  CapitalName: string;
  HiddenCountry: boolean;
  id: number;
}

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
  { id: 7, CountryName: 'Tokelau', CapitalName: 'Atafu', HiddenCountry: true },
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

export const TestComponent = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [savedCountries, setSaveddCountries] = useState<any>([]);
  const [countryArray, setCountryArray] = useState<any>([]);

  const [visibleCountryArray, setVisibleCountryArray] = useState<any>([]);

  const showCountry = () => {
    const random = array1[Math.floor(Math.random() * array1.length)];
    console.log('random', random);
    countryArray.push(random);
    setCountryArray([...countryArray]);
    console.log('countryArray', countryArray);
  };

  const sendToAtlas = (value: any, index: number) => {
    setSaveddCountries((currentCountries: any) => [...currentCountries, value]);
    setVisibleCountryArray(
      visibleCountryArray.filter((value: any, i: any) => i !== index)
    );
    console.log('savedCountries', savedCountries);
  };

  const sendToVisibleArray = (arrayEntry: any, index: number) => {
    setCountryArray(countryArray.filter((value: any, i: any) => i !== index));
    setVisibleCountryArray((currentWhatever: any) => [
      ...currentWhatever,
      arrayEntry,
    ]);
    console.log('setVisibleCountries', visibleCountryArray);
  };

  return (
    <div className='TestComponent'>
      <label>
        <h1>Test Component</h1>
      </label>
      <button onClick={showCountry}>Click Me!</button>
      {countryArray.map((abc: any, index: number) => (
        <div
          key={index}
          style={{ border: '1px solid red' }}
          onClick={() => sendToVisibleArray(abc, index)}
        >
          HIDDEN COUNTRY
        </div>
      ))}
      {visibleCountryArray.map((asdf: any, index: number) => {
        return (
          <div key={index} className='forecast'>
            <div>{asdf.CountryName}</div>
            <div>{asdf.CaptialName}</div>
            <button onClick={() => sendToAtlas(asdf, index)}>
              Send to Atlas
            </button>
          </div>
        );
      })}
    </div>
  );
};
