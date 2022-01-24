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
