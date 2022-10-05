export interface WeatherInterface {
  city: string;
  current: {
    temperature: number;
    weather_code: number;
    wind: { speed: number; direction: number };
  };
  daily: {
    precipitation: Array<number>;
    sun: { set: Array<number>; rise: Array<number> };
    temperature: { max: Array<number>; min: Array<number> };
    weather_code: Array<number>;
  };
}
