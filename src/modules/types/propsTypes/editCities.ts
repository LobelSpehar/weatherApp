import { LocationInterface } from 'modules/types/location';

export interface EditCitiesProps {
  modalState: boolean;
  onAddLocation: Function;
  onDelLocation: Function;
  myLocations: Array<LocationInterface>;
}
