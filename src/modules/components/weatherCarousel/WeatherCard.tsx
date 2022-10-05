import { WeatherCardProps } from 'modules/types/propsTypes/weatherCard';
import { ReactComponent as SunSvg } from 'assets/icons/sun-icon.svg';

import WeatherInfo from './weatherCard/WeatherInfo';

function WeatherCard({
  weather,
  item,
  loading,
  index,
  activeCard,
  modalState,
  onSetActive,
}: WeatherCardProps) {
  return (
    <li
      className={
        'flex-none transition-all duration-1000 delay-100 h-[480px] w-[360px] bg-white rounded-[38px] ' +
        (activeCard === index
          ? 'drop-shadow-2xl '
          : 'drop-shadow-xl scale-90 hover:scale-95 ') +
        (Math.abs(activeCard - index) > 1 && 'hidden')
      }
    >
      {loading ? (
        <SunSvg className='animate-spin mx-auto mt-52' />
      ) : activeCard === index ? (
        <WeatherInfo weather={weather} />
      ) : (
        <button
          disabled={modalState}
          onClick={(e) => {
            onSetActive(index);
          }}
          className='h-full w-full font-mono transition-all duration-1000 hover:text-4xl'
        >
          {item.city}
        </button>
      )}
    </li>
  );
}
export default WeatherCard;
