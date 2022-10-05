import { WeatherInterface } from 'modules/types/weather';

import WeatherIcons from 'modules/components/weatherCarousel/weatherCard/weatherInfo/WeatherIcons';
import WindDirection from 'modules/components/weatherCarousel/weatherCard/weatherInfo/WindDirection';

function WeatherInfo({ weather }: { weather: WeatherInterface }) {
  return (
    <div className='ml-6 mt-8'>
      <h1 className='text-4xl  mb-4 font-semibold'>{weather.city}</h1>
      <h2 className='mt-6 text-3xl font-semibold inline-block w-full'>
        {weather.current.temperature}&#8451;
        <div className='float-right mr-14 w-14'>
          <WeatherIcons weatherCode={weather.current.weather_code} />
        </div>
      </h2>
      <WindDirection wind={weather.current.wind} />
      <p className='text-xl mt-6 mb-2 font-semibold'>Daily</p>
      <ul className='flex flex-row w-full overflow-hidden '>
        <li className='mr-4 w-7'></li>
        {weather.daily.weather_code.map((item, index) => (
          <li key={index} className='mr-2 w-7'>
            <WeatherIcons weatherCode={item} />
          </li>
        ))}
      </ul>
      <ul className='flex flex-row w-full overflow-hidden'>
        <li className='mr-4 w-7 text-center font-semibold'>Max</li>
        {weather.daily.temperature.max.map((item, index) => (
          <li key={index} className='mr-2 w-7 text-center'>
            {item}
          </li>
        ))}
        <li>&#8451;</li>
      </ul>
      <ul className='flex flex-row w-full overflow-hidden'>
        <li className='mr-4 w-7 text-center font-semibold'>Min</li>
        {weather.daily.temperature.min.map((item, index) => (
          <li key={index} className='mr-2 w-7 text-center'>
            {item}
          </li>
        ))}
        <li>&#8451;</li>
      </ul>
      <ul className='flex flex-row w-full overflow-hidden'>
        <li className='mr-4 w-7 text-center font-semibold'>Rain</li>
        {weather.daily.precipitation.map((item, index) => (
          <li key={index} className='mr-2 w-7 text-center'>
            {item}
          </li>
        ))}
        <li>mm</li>
      </ul>
    </div>
  );
}
export default WeatherInfo;
