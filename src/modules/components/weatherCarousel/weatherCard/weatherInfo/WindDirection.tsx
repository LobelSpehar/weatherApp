import { ReactComponent as WindIcon } from 'assets/icons/wind.svg';

function WindDirection({
  wind,
}: {
  wind: { direction: number; speed: number };
}) {
  const windAngles = [
    'rotate-[45deg]',
    'rotate-[90deg]',
    'rotate-[135deg]',
    'rotate-[180deg]',
    'rotate-[225deg]',
    'rotate-[270deg]',
    'rotate-[315deg]',
    'rotate-[360deg]',
  ];
  const windAngle = Math.round(wind.direction / 45);
  return (
    <p className='mt-10 text-3xl font-semibold inline-block w-full'>
      {wind.speed}km/h
      <WindIcon className={windAngles[windAngle] + ' w-14 float-right mr-14'} />
    </p>
  );
}
export default WindDirection;
