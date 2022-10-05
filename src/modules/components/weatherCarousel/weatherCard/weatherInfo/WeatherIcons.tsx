import { ReactComponent as cloud } from 'assets/icons/weathericons/cloud.svg';
import { ReactComponent as fog } from 'assets/icons/weathericons/fog.svg';
import { ReactComponent as heavyrain } from 'assets/icons/weathericons/heavyrain.svg';
import { ReactComponent as rain } from 'assets/icons/weathericons/rain.svg';
import { ReactComponent as showers } from 'assets/icons/weathericons/showers.svg';
import { ReactComponent as snow } from 'assets/icons/weathericons/snow.svg';
import { ReactComponent as sun } from 'assets/icons/weathericons/sun.svg';
import { ReactComponent as thunderstorm } from 'assets/icons/weathericons/thunderstorm.svg';

function WeatherIcons({ weatherCode }: { weatherCode: number }) {
  const icons = [sun, cloud, fog, showers, snow, rain, heavyrain, thunderstorm];
  var Icon = icons[0];
  if (4 > weatherCode && weatherCode > 0) {
    Icon = icons[1];
  }
  if (weatherCode === 45 || weatherCode === 48) {
    Icon = icons[2];
  }
  if (weatherCode === 80 || weatherCode === 81 || weatherCode === 82) {
    Icon = icons[3];
  }

  if (
    weatherCode === 56 ||
    weatherCode === 57 ||
    weatherCode === 66 ||
    weatherCode === 67 ||
    weatherCode === 71 ||
    weatherCode === 73 ||
    weatherCode === 75 ||
    weatherCode === 77 ||
    weatherCode === 85 ||
    weatherCode === 86
  ) {
    Icon = icons[4];
  }
  if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
    Icon = icons[5];
  }
  if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) {
    Icon = icons[6];
  }
  if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
    Icon = icons[7];
  }
  return <Icon />;
}
export default WeatherIcons;
