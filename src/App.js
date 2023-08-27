import "./App.css";
import { useState } from "react";
import SearchContainer from "./SearchContainer";
import WeatherContainer from "./WeatherContainer";
import WeatherDetails from "./WeatherDetails";
import { MdOutlineWrongLocation } from "react-icons/md";
import axios from "axios";

function App() {
  const key = "830e634257ba80369beaa44e680ac3cf";

  const [showWeather, setShowWeather] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [validLocation, setValidLocation] = useState(true);

  const handleSearch = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather`;

    setShowWeather(true);
    setShowSearchBox(false);

    axios
      .get(url, {
        params: {
          q: location,
          appid: key,
          units: "imperial",
        },
      })
      .then((response) => {
        setWeatherData(response.data);
        setValidLocation(true);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setValidLocation(false);
      });
  };

  return (
    <body>
      <div
        className={`container ${validLocation ? "" : "invalid-location"}`}
        style={{ height: showSearchBox ? "90px" : "500px" }}
      >
        <SearchContainer onSearch={handleSearch} />

        {showWeather && weatherData.weather && (
          <WeatherContainer show={showWeather} weatherData={weatherData} />
        )}
        {showWeather && weatherData.weather && (
          <WeatherDetails show={showWeather} weatherData={weatherData} />
        )}

        {!validLocation && (
          <div className="invalid-location-message">
            <MdOutlineWrongLocation size={20} /> Invalid Location
          </div>
        )}
      </div>
    </body>
  );
}

export default App;
