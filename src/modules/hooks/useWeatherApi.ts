import { useState } from 'react';

import { LocationInterface } from 'modules/types/location';
import { WeatherInterface } from 'modules/types/weather';

export function useWeatherApi() {
  const [weather, setWeather] = useState<WeatherInterface>({
    city: '',
    current: {
      temperature: 0,
      weather_code: 0,
      wind: { speed: 0, direction: 0 },
    },
    daily: {
      precipitation: [0],
      sun: { set: [0], rise: [0] },
      temperature: { max: [0], min: [0] },
      weather_code: [0],
    },
  });
  const getWeather = async function (location: LocationInterface) {
    const rawResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=auto`
    );
    const json = await rawResponse.json().then((res) => res);

    const result: WeatherInterface = {
      city: location.city,
      current: {
        weather_code: json.current_weather.weathercode,
        temperature: json.current_weather.temperature,
        wind: {
          speed: json.current_weather.windspeed,
          direction: json.current_weather.winddirection,
        },
      },
      daily: {
        precipitation: json.daily.precipitation_sum,
        sun: {
          set: json.daily.sunset,
          rise: json.daily.sunrise,
        },
        temperature: {
          max: json.daily.temperature_2m_max,
          min: json.daily.temperature_2m_min,
        },
        weather_code: json.daily.weathercode,
      },
    };

    setWeather(result);
  };
  return { getWeather, weather };
}
