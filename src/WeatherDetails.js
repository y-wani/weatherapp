import { TbTemperatureFahrenheit } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";
import {WiRaindrops} from "react-icons/wi";

function WeatherDetails( {weatherData} ) {

    if (!weatherData) {
        return null; // Don't render anything if data is not available
      }

  return (
    <div>
      <div className="details_container">
        <div className="Temp--box">
        {weatherData.main.temp}
          <TbTemperatureFahrenheit className="Degree-logo" />
        </div>
      </div>
      <div className="weather--description">
      {weatherData.weather[0].description}
      </div>
      <div className="deets">
        <div className="Humidity" >
          <WiHumidity size={40} className="icon" color="#40B5AD"/>
          {weatherData.main.humidity}% --
          Humidity
        </div>
        <div className="Windspeed" >
          <RiWindyFill size={38} className="icon" color="grey"/>
          {weatherData.wind.speed} --
          Wind
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
