import { LocationInterface } from 'modules/types/location';
import { WeatherInterface } from 'modules/types/weather';

export interface WeatherCardProps {
  weather: WeatherInterface;
  item: LocationInterface;
  loading: boolean;
  index: number;
  activeCard: number;
  modalState: boolean;
  onSetActive: Function;
}
