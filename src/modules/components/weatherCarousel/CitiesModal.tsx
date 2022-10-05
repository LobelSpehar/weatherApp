import { CitiesModalProps } from 'modules/types/propsTypes/citiesModal';

import EditCities from 'modules/components/weatherCarousel/citiesModal/EditCities';
import ModalBtn from 'modules/components/weatherCarousel/citiesModal/ModalBtn';

function CitiesModal({
  modalState,
  locations,
  loading,
  onOpenModal,
  addLocation,
  delLocation,
  myLocations,
}: CitiesModalProps) {
  return (
    <li
      className={`${
        modalState
          ? 'w-[510px] h-[680px] z-10 -translate-y-[100px]' +
            (locations.length
              ? ' -translate-x-[435px] '
              : ' -translate-x-[75px] ')
          : ' ml-[105px] hover:h-[480px] overflow-hidden hover:w-[360px] hover:animate-pulse h-[150px] w-[150px] scale-90 hover:scale-100 hover:ml-[18px] hover:rounded-[38px]'
      } flex-none overflow-hidden transition-all duration-1000 delay-100 bg-white rounded-[75px] drop-shadow-xl`}
    >
      <ModalBtn
        loading={loading}
        onOpenModal={onOpenModal}
        modalState={modalState}
      />
      <EditCities
        modalState={modalState}
        onAddLocation={addLocation}
        onDelLocation={delLocation}
        myLocations={myLocations}
      />
    </li>
  );
}
export default CitiesModal;
