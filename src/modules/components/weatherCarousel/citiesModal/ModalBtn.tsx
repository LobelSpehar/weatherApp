import { ModalBtnProps } from 'modules/types/propsTypes/modalBtn';
import { ReactComponent as SunSvg } from 'assets/icons/sun-icon.svg';

function ModalBtn({ loading, onOpenModal, modalState }: ModalBtnProps) {
  return (
    <button
      disabled={loading}
      onClick={(e) => {
        onOpenModal();
      }}
      className={`transition-all duration-1000 delay-100 w-full h-full rounded-full text-[50px] text-[#2A2B2A]${
        modalState &&
        ' w-20 h-20 hover:scale-150 translate-x-[400px] mt-8 rotate-45 hover:animate-pulse'
      }`}
    >
      {loading ? <SunSvg className='animate-spin mx-auto' /> : '+'}
    </button>
  );
}
export default ModalBtn;
