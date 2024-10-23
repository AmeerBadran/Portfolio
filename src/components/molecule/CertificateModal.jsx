import palSoft from '../../assets/images/palSoft.jpg';
import QA from '../../assets/images/QA,QC.jpg';
import ptuk from '../../assets/images/ptuk.jpg';

// eslint-disable-next-line react/prop-types
const CertificateModal = ({ isOpen, closeModal, imageSrc }) => {
  if (!isOpen) return null;

  const getImageSrc = (src) => {
    switch (src) {
      case 'palSoft':
        return palSoft;
      case 'QA':
        return QA;
      case 'ptuk':
        return ptuk;
      default:
        return palSoft;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[200]">
      <div className="bg-[#000000] w-max  max-w-7xl relative">
        <button
          onClick={closeModal}
          className="absolute -top-8 right-0 text-gray-50 hover:text-gray-400 text-2xl"
        >
          &times;
        </button>

        <div className="bg-[#E8E7EC] w-max max-w-[1000px] mx-auto p-14">
          <div className="text-center">
            <img src={getImageSrc(imageSrc)} alt="Certificate" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
