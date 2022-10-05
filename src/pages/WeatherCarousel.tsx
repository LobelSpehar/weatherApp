import { useState, useEffect } from 'react';

import { useSavedLocations } from 'modules/hooks/useSavedLocations';
import { useWeatherApi } from 'modules/hooks/useWeatherApi';
import { LocationInterface } from 'modules/types/location';

import WeatherCard from 'modules/components/weatherCarousel/WeatherCard';
import CitiesModal from 'modules/components/weatherCarousel/CitiesModal';

export function WeatherCarousel() {
  const { myLocations, addLocation, delLocation } = useSavedLocations();
  const { weather, getWeather } = useWeatherApi();
  const [activeCard, setActiveCard] = useState<number>(0);
  const [modalState, setModalState] = useState<boolean>(false);
  const [locations, setLocations] = useState(myLocations);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (myLocations.length) {
      getWeather(locations[activeCard]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard, locations]);

  const onSetActive = (index: number) => {
    setActiveCard(index);
  };
  const onOpenModal = () => {
    setModalState(!modalState);
    if (modalState) {
      setLoading(true);
      setTimeout(() => {
        setLocations(myLocations);
        setActiveCard(0);
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <ul
      className={
        (activeCard ? 'ml-[calc(50vw-540px)] ' : 'ml-[calc(50vw-180px)] ') +
        'h-full items-center mt-[calc(50vh-240px)] select-none flex flex-row h-auto'
      }
    >
      {locations.map((item: LocationInterface, index: number) => (
        <WeatherCard
          key={item.city}
          weather={weather}
          item={item}
          loading={loading}
          index={index}
          activeCard={activeCard}
          modalState={modalState}
          onSetActive={onSetActive}
        />
      ))}
      {activeCard === locations.length - 1 || !locations.length ? (
        <CitiesModal
          modalState={modalState}
          locations={locations}
          loading={loading}
          onOpenModal={onOpenModal}
          addLocation={addLocation}
          delLocation={delLocation}
          myLocations={myLocations}
        />
      ) : null}
    </ul>
  );
}
