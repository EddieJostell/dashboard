import React, { useEffect, useState } from 'react';
import { countries } from '../../utils/country_capitals';
import '../../utils/sweden.json';

interface IWeatherState {
  capitalLat: string;
  capitalLong: string;
  capitalName: string;
  weatherData: string[];
}

const WorldWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherState>({
    capitalName: 'Stockholm',
    capitalLat: '59.329323',
    capitalLong: '18.068581',
    weatherData: [],
  });

  // const [data, setData] = useState([]);

  const changeCity = (event: any) => {
    setWeatherInfo({ ...weatherInfo, capitalName: event?.target.value });
  };

  /* const infoFromApi = (data: any) => {
    console.log(weatherInfo.weatherData);
    return <div></div>;
  }; */

  useEffect(() => {
    const fetchData = async () => {
      let weather = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.capitalName}&units=metric&APPID=47e6a9e5eec596e801f83d4ab090443b`;
      //let oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherInfo.capitalLat}&lon=${weatherInfo.capitalLong}&exclude=hourly,daily&appid=47e6a9e5eec596e801f83d4ab090443b`;
      await fetch(weather)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('data', data);
        })
        .catch(function (error) {
          console.log('Request failed', error);
        });
    };
    fetchData();
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
