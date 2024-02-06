import React, { useState } from 'react';
import swal from 'sweetalert';
import { getIconClass } from './helpers'; // Import the helper function for getting icon class

const Weather2 = () => {
  const [weather, setWeather] = useState(null);

  const searchWeather = async () => {
    const city = document.getElementById('input-box').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4eb3703790b356562054106543b748b2&units=metric`);
    const data = await response.json();
    if (data.cod === '400') {
      swal('Empty Input', 'Please enter any city', 'error');
    } else if (data.cod === '404') {
      swal('Bad Input', "Entered city didn't match", 'warning');
    } else {
      setWeather(data);
    }
  };

  const dateManage = (dateArg) => {
    // Date management function remains the same
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
    
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    
      let year = dateArg.getFullYear();
      let month = months[dateArg.getMonth()];
      let date = dateArg.getDate();
      let day = days[dateArg.getDay()];
      // console.log(year+" "+date+" "+day+" "+month);
      return `${date} ${month} (${day}) , ${year}`;
  };

  const getTime = (todayDate) => {
    let hour = addZero(todayDate.getHours());
    let minute = addZero(todayDate.getMinutes());
    return `${hour}:${minute}`;
  };

  const reset = () => {
    // Reset function remains the same
    let input = document.getElementById('input-box');
    input.value = '';
  };

  return (
    <div>
      <div className="app-main bg-light" id="parent">
        <div className="header">
          <h4>Get Weather Report</h4>
        </div>
        
        <div className="input-group mb-3 searchInputBox">
          <input
            type="text"
            className="form-control"
            id="input-box"
            placeholder="Enter city name"
            aria-label="Enter city name"
            aria-describedby="search-button"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary search"
              type="button"
              id="search-button"
              onClick={searchWeather}
            >
              Search
            </button>
          </div>
        </div>

        {weather && (
  <div className="weather-body" id="weather-body">
    <div className="card">
      <div className="card-body">
        <div className="location-details">
          <h5 className="card-title city text-dark" id="city">{weather.name}, {weather.sys.country}</h5>
          <p className="card-text date text-dark" id="date">{dateManage(new Date())}</p>
        </div>
        <div className="weather-status">
          <h2 className="card-title temp text-dark" id="temp">{Math.round(weather.main.temp)}&deg;C</h2>
          <p className="card-text weather text-dark" id="weather">{weather.weather[0].main} <i className={getIconClass(weather.weather[0].main)}></i></p>
          <p className="card-text min-max" id="min-max">{Math.floor(weather.main.temp_min)}&deg;C (min) / {Math.ceil(weather.main.temp_max)}&deg;C (max)</p>
          <p className="card-text text-dark" id="updated_on">Updated as of {getTime(new Date())}</p>
        </div>
        <hr />
        <div className="day-details">
          <p className="card-text basic text-dark">Feels like {weather.main.feels_like}&deg;C | Humidity {weather.main.humidity}% <br /> Pressure {weather.main.pressure} mb | Wind {weather.wind.speed} KMPH</p>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default Weather2;
