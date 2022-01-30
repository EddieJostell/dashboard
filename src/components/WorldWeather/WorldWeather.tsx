import React, { useEffect, useState } from 'react';
import { countries, ICountries } from '../../utils/country_capitals';
import './WorldWeather.scss';

interface IWeatherState {
  capitalLat: string;
  capitalLong: string;
  capitalName: string;
  weatherData: {};
}

const WorldWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWeatherState>({
    capitalName: 'Stockholm',
    capitalLat: '59.329323',
    capitalLong: '18.068581',
    weatherData: {},
  });

  const changeCity = (event: any) => {
    setWeatherInfo({ ...weatherInfo, capitalName: event?.target.value });
  };

  useEffect(() => {
    let weather = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInfo.capitalName}&units=metric&APPID=47e6a9e5eec596e801f83d4ab090443b`;
    //let oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherInfo.capitalLat}&lon=${weatherInfo.capitalLong}&exclude=hourly,daily&appid=47e6a9e5eec596e801f83d4ab090443b`;
    fetch(weather)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherInfo({ ...weatherInfo, weatherData: data });
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }, [weatherInfo.capitalName]);

  const dropdownOptions = () => {
    let sortedList = countries.sort(function (a, b) {
      return a.CountryName.localeCompare(b.CountryName);
    });

    return sortedList.map((opt: ICountries, key: number) => (
      <option key={key} value={opt.CapitalName}>
        {opt.CountryName} - {opt.CapitalName}
      </option>
    ));
  };

  const showWeatherData = (info: any) => {
    return (
      <div className="forecast">
        <div className="townNtemp">
          <h1 className="forecast-h1">{info.name}</h1>
          {/* <h2 className="forecast-h2">{'HEJ'}</h2> */}
          <h1 className="forecast-h1">
            <img
              className="img"
              src="../../img/thermo-light.png"
              alt="Temperature:"
            />{' '}
            {info.main ? info.main.temp.toFixed(0) : 'N/A'} °C
          </h1>
        </div>
        <div className="hum">
          <h2 className="forecast-h2">
            <i className="owf owf-{info.wicon}"></i>{' '}
            {info.weather ? info.weather[0].main : 'N/A'}
          </h2>
          <h2 className="forecast-h2">
            <img
              className="img"
              src="../../img/humidity-light.png"
              alt="Humidity:"
            />{' '}
            {info.main ? info.main.humidity : 'N/A'}%
          </h2>
        </div>
        <div className="wind">
          <h2 className="forecast-h2">
            <img
              className="img"
              src="../../img/wind-lines-light.png"
              alt="Wind:"
            />{' '}
            {info.wind ? info.wind.speed.toFixed(0) : 'N/A'} m/s |{' '}
            {info.wind ? info.wind.deg : 'N/A'} degrees
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="WorldWeather">
      <label>
        <h1>Todays Weather</h1>
      </label>
      <select className="dropDown" onChange={changeCity}>
        <option value="0">* Pick a city *</option>
        {dropdownOptions()}
      </select>
      <div className="weatherDiv">
        {showWeatherData(weatherInfo.weatherData)}
      </div>
    </div>
  );
};

export default WorldWeather;
