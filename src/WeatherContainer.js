import { WiNightAltStormShowers } from "react-icons/wi";
import {
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiHumidity,
  WiSmoke,
  WiDust,
} from "react-icons/wi";
import {
  BsSnow2,
  BsCloudRain,
  BsCloudSun,
  BsClouds,
  BsTornado,
  BsCloudHaze2,
  BsCloudFog2,
} from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { LiaCloudSunRainSolid, LiaCloudSunSolid } from "react-icons/lia";
import { IoThunderstormOutline } from "react-icons/io";
import { TbMist } from "react-icons/tb";
import { SiWeightsandbiases } from "react-icons/si";

import "./App.css";

function WeatherContainer({ show, weatherData }) {
  const widgets = [
    { name: "Rain", icon: WiRain, size: 190 },
    { name: "Thunderstorm", icon: WiThunderstorm, size: 190 },
    { name: "Snow", icon: BsSnow2, size: 170 },
    { name: "Clear", icon: MdSunny, size: 180 },
    { name: "few clouds", icon: BsCloudSun, size: 170 },
    { name: "Drizzle", icon: LiaCloudSunRainSolid, size: 180 },
    { name: "Clouds", icon: WiCloudy, size: 190 },
    { name: "Mist", icon: TbMist, size: 170 },
    { name: "Tornado", icon: BsTornado, size: 140 },
    { name: "Smoke", icon: WiSmoke, size: 200 },
    { name: "Haze", icon: BsCloudHaze2, size: 160 },
    { name: "Dust", icon: WiDust, size: 200 },
    { name: "Fog", icon: BsCloudFog2, size: 160 },
    { name: "Sand", icon: SiWeightsandbiases, size: 120 },
  ];

  const getWeatherIcon = () => {
    const weatherName = weatherData.weather[0].main.toLowerCase(); //Console logging perfectly
    const widget = widgets.find(
      (widget) => widget.name.toLowerCase() === weatherName.toLowerCase()
    );
    const WeatherIcon = widget.icon;

    return <WeatherIcon size={widget.size} />;
  };

  return (
    <div className={`weather-container ${show ? "show" : ""}`}>
      <div className="Weather-icon">{getWeatherIcon()}</div>
    </div>
  );
}

export default WeatherContainer;
