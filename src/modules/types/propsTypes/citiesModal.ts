import { LocationInterface } from 'modules/types/location';

export interface CitiesModalProps {
  modalState: boolean;
  locations: Array<LocationInterface>;
  loading: boolean;
  onOpenModal: Function;
  addLocation: Function;
  delLocation: Function;
  myLocations: Array<LocationInterface>;
}
