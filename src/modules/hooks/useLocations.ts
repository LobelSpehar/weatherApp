import { LocationInterface } from 'modules/types/location';

export function useLocations() {
  const cityList = require('assets/geoLocations/hr-geo.json');
  const getCities = (
    searchParam: string,
    myLocations: Array<LocationInterface>
  ) => {
    let list = cityList.filter((item: LocationInterface) =>
      item.city.toLowerCase().includes(searchParam.toLowerCase())
    );
    let filteredList = list.filter(
      (item: LocationInterface) => !myLocations.includes(item)
    );

    let result = filteredList.slice(0, 5);
    return result;
  };
  return { getCities };
}
