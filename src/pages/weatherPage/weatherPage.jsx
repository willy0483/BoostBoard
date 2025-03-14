import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { WeatherPageStyled } from "./weatherPage.styled";

import { LocationContext } from "../../provider/locationProvider";
import { Container } from "../../components/container/container";
import { WeatherGrid } from "../../components/grid/weatherGrid.styled";
import { Forecast } from "../../components/forecast/forecast";
import { WindSpeed } from "../../components/windSpeed/windSpeed";
import { Location } from "../../components/location/location";
import { Visibility } from "../../components/visibility/visibility";

import { Map } from "../../components/map/map";

// weatherCondition images
import clear from "../../assets/svg/weather/clear-day.svg";
import cloudy from "../../assets/svg/weather/cloudy.svg";
import rainy from "../../assets/svg/weather/rainy.svg";
import snowy from "../../assets/svg/weather/snowy.svg";
import thunderstorms from "../../assets/svg/weather/thunderstorms.svg";
import drizzle from "../../assets/svg/weather/drizzle.svg";
import mist from "../../assets/svg/weather/mist.svg";
import haze from "../../assets/svg/weather/haze.svg";
import dust from "../../assets/svg/weather/dust.svg";
import fog from "../../assets/svg/weather/fog.svg";
import wind from "../../assets/svg/weather/wind.svg";
import tornado from "../../assets/svg/weather/tornado.svg";

export const WeatherPage = () => {
  const location = useContext(LocationContext);
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);

  let latitude = location?.latitude;
  let longitude = location?.longitude;
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  if (location === null || latitude === null) {
    latitude = 57.087482;
    longitude = 8.994132;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  const getWeather = async () => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setWeather(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [location]);

  useEffect(() => {
    const weatherCondition = weather?.weather[0]?.main;
    setWeatherCondition(weatherCondition);

    switch (weatherCondition) {
      case "Clear":
        console.log("The weather is clear.");
        setWeatherIcon(clear);
        break;
      case "Clouds":
        console.log("It is cloudy.");
        setWeatherIcon(cloudy);
        break;
      case "Rain":
        console.log("It is raining.");
        setWeatherIcon(rainy);
        break;
      case "Snow":
        console.log("It is snowing.");
        setWeatherIcon(snowy);
        break;
      case "Thunderstorm":
        console.log("There is a thunderstorm.");
        setWeatherIcon(thunderstorms);
        break;
      case "Drizzle":
        console.log("There is a drizzle.");
        setWeatherIcon(drizzle);
        break;
      case "Mist":
        console.log("There is mist.");
        setWeatherIcon(mist);
        break;
      case "Haze":
        console.log("There is haze.");
        setWeatherIcon(haze);
        break;
      case "Dust":
        console.log("There is dust.");
        setWeatherIcon(dust);
        break;
      case "Fog":
        console.log("There is fog.");
        setWeatherIcon(fog);
        break;
      case "Squall":
        console.log("There is a squall.");
        setWeatherIcon(wind);
        break;
      case "Tornado":
        console.log("There is a tornado.");
        setWeatherIcon(tornado);
        break;
      default:
        console.log("Weather condition not recognized.");
        break;
    }
  }, [weather]);

  return (
    <Container>
      <WeatherPageStyled>
        <WeatherGrid>
          <Forecast condition={weatherCondition} kelvin={weather?.main?.temp} icon={weatherIcon} />
          <WindSpeed SpeedMs={weather?.wind.speed} icon={wind} />
          <Location country={weather?.sys.country} name={weather?.name} />
          <Visibility number={weather?.visibility} icon={fog} />
        </WeatherGrid>
        <Map lan={latitude} lon={longitude} />
      </WeatherPageStyled>
    </Container>
  );
};
