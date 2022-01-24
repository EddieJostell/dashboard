import React, { useEffect, useState } from 'react';
import { countries } from '../../utils/country_capitals';

interface IWeatherState {
  capitalName: string;
  weatherData: string[];
}

const WorldWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherState>({
    capitalName: '',
    weatherData: [],
  });

  const changeCity = (event: any) => {
    setWeatherInfo({ ...weatherInfo, capitalName: event?.target.value });
  };

  useEffect(() => {
    let weather = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.capitalName}&units=metric&APPID=47e6a9e5eec596e801f83d4ab090443b`;
    fetch(weather)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }, [weatherInfo.capitalName]);

  const dropdownOptions = () => {
    let sortedList = countries.sort(function (a, b) {
      return a.CapitalName.localeCompare(b.CapitalName);
    });

    return sortedList.map((opt, key) => (
      <option key={key} value={opt.CapitalName}>
        {opt.CapitalName} - {opt.CountryName}
      </option>
    ));
  };

  /*  const infoFromApi = (response: any) => {
    console.log(response);
    return <div></div>;
  }; */

  return (
    <div>
      <label>
        <h3>Cities</h3>
      </label>
      <select onChange={changeCity}>{dropdownOptions()}</select>
    </div>
  );
};

export default WorldWeather;
