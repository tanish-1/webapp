import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data from API
    const fetchWeather = async () => {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather&appid=4eb3703790b356562054106543b748b2');
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <div>
      {weather && (
        <div>
         
    <div
      id="myCarousel"
      className="carousel slide pointer-event"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="active"
          aria-current="true"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/1400x400/?technology,Technology"
            className="d-block w-100"
            alt="First Slide"
          />
          <div className="container bg-light">
            <div className="carousel-caption text-start">
              <h1>Weather is Nice.</h1>
              <p>
                In India, the climate is tropical, with considerable variations
                in temperature. In winter, there is great difference in day and
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/1400x400/?India,Technology"
            className="d-block w-100"
            alt="Second Slide"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>UttarPradesh</h1>
              <p>
                Uttar Pradesh is a state in northern India. Weather is Nice.
                Climate for Uttar Pradesh Cool.
              </p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/1400x400/?State,Technology"
            className="d-block w-100"
            alt="Third Slide"
          />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Weather Forecast</h1>
              <p>
                Weather forecasting is the application of science and technology
                to predict the conditions of the atmosphere for a given location
                and time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

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
          >
            Search
          </button>
        </div>
      </div>

      <div className="weather-body" id="weather-body">
         
      </div>
    </div>
        </div>
      )}
    </div>
  );
};





export default Weather;
