import { useEffect, useState } from 'react';

import { useLocations } from 'modules/hooks/useLocations';
import { LocationInterface } from 'modules/types/location';
import { EditCitiesProps } from 'modules/types/propsTypes/editCities';

function EditCities({
  modalState,
  onAddLocation,
  onDelLocation,
  myLocations,
}: EditCitiesProps) {
  const { getCities } = useLocations();

  const [cityList, setCityList] = useState<Array<LocationInterface>>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setCityList(getCities(input, myLocations));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, myLocations]);

  const onInput = (text: string) => {
    setInput(text);
  };
  const onAddCity = (city: LocationInterface) => {
    onAddLocation(city);
  };
  const onDelCity = (city: LocationInterface) => {
    onDelLocation(city);
  };

  return (
    <div
      className={
        (modalState ? 'translate-y-[0px] ' : 'translate-y-[600px] ') +
        ' ml-14 mt-2 w-full pr-14 h-full transition delay-1000 duration-1000 '
      }
    >
      <input
        disabled={myLocations.length > 5}
        className='h-8 w-1/2 border-[#2A2B2A] bg-[#F8F4E3] rounded mb-4 drop-shadow-lg'
        placeholder='  Search for city'
        value={input}
        onChange={(e) => onInput(e.target.value)}
      ></input>
      {myLocations.length > 5 ? (
        <p className='text-red-700 mb-6 h-20'>
          My list full. Please delete a location to add a new one.
        </p>
      ) : (
        <ul className='flex flex-row flex-wrap h-20 mb-6 mr-6'>
          {cityList.map((item) => (
            <li key={item.city}>
              <button
                onClick={(e) => onAddCity(item)}
                className='pt-0.5 mb-2 border border-[#79A9D1] w-auto h-8 mr-2 rounded-lg px-2 hover:drop-shadow-lg hover:animate-pulse'
              >
                {item.city} +
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className='text-2xl mb-2'> My list:</p>
      <ul className='w-full text-lg '>
        {myLocations.map((item) => (
          <li
            key={item.city}
            className='w-fit h-8 px-2 mb-1 border border-[#79A9D1] rounded-lg group'
          >
            {item.city}
            <button
              onClick={(e) => onDelCity(item)}
              className='ml-4 hidden group-hover:inline-block transition-all duration-1000 delay-100 rotate-45'
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EditCities;
