import { useState } from 'react';

import { LocationInterface } from 'modules/types/location';

export function useSavedLocations() {
  const [myLocations, setMyLocations] = useState<Array<LocationInterface>>([]);
  const addLocation = (location: LocationInterface) => {
    setMyLocations((array: Array<LocationInterface>) => [...array, location]);
  };
  const delLocation = (location: LocationInterface) => {
    let arr = myLocations.filter((item) => item !== location);
    setMyLocations(arr);
  };

  return { myLocations, addLocation, delLocation };
}
