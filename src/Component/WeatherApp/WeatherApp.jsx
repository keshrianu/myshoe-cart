import React, { useState } from "react";
import "./WeatherApp.css";

import search from "../Assests/search.png";
import clear from "../Assests/clear.png";
import drizzle from "../Assests/drizzle.png";
import humidityIcon from "../Assests/humidity.png";
import windIcon from "../Assests/wind.png";
import clouds from "../Assests/clouds.png";

let apiKey = "cd74de3b85970ad6232f6a1226298c64";

const WeatherApp = () => {
  const [humidity, setHumidity] = useState("0 %");
  const [windSpeed, setWindSpeed] = useState("0 km/h");
  const [temperature, setTemperature] = useState("°C");
  const [location, setLocation] = useState("location");

  const searchCity = async () => {
    const element = document.getElementsByClassName("cityinput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    setHumidity(data.main.humidity + " %");
    setWindSpeed(data.wind.speed + " km/h");
    setTemperature(data.main.temp + "°C");
    setLocation(data.name);
  };

  const handlekey = async (e) => {
    if (e.key === "Enter") {
      const element = document.getElementsByClassName("cityinput");
      if (element[0].value === "") {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

      let response = await fetch(url);
      let data = await response.json();

      setHumidity(data.main.humidity + " %");
      setWindSpeed(data.wind.speed + " km/h");
      setTemperature(data.main.temp + "°C");
      setLocation(data.name);
    }
  };

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="cityinput"
            placeholder="Enter City Name"
            onKeyDown={handlekey}
          />
          <div
            className="search-icon"
            onClick={() => {
              searchCity();
            }}
          >
            <img src={search} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={clouds} alt="" />
        </div>
        <div className="weather-temp">{temperature}</div>
        <div className="weather-location">{location}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidityIcon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} alt="" className="icon" />
            <div className="data">
              <div className="wind_speed">{windSpeed}</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
