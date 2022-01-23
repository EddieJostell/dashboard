import React, { useState } from 'react';
import { countries, ICountries } from '../../utils/country_capitals';

interface IWeatherState {}

const WorldWeather = () => {
  const [capital, setCapital] = useState<IWeatherState>({
    capitalName: 'Stockholm',
  });

  const changeCity = (event: any) => {
    setCapital({ ...capital, capitalName: event?.target.value });
  };

  //`https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&APPID=006595c752436e02740e9d8ff6b6cd05`;

  const dropdownOptions = () => {
    return countries.map((opt, key) => (
      <option key={key} value={opt.CapitalName}>
        {opt.CapitalName} - {opt.CountryName}
      </option>
    ));
  };
  return (
    <div>
      <label>
        <h3>Cities</h3>
      </label>
      <select className="cod-select" onChange={changeCity}>
        {dropdownOptions()}
      </select>
    </div>
  );
};

export default WorldWeather;
