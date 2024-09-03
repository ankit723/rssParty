// components/Modal.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 mt-20 bg-white">
      <div className="relative w-full h-full p-20">
        <button onClick={onClose} className="circular-button">
          &times; 
        </button>


        <button 
          onClick={onPrev} 
          className="absolute top-1/2 transform -translate-y-1/2 text-black text-5xl "
        >
          &lt;
        </button>
        <button 
          onClick={onNext} 
          className="absolute right-[4.75rem] top-1/2 transform -translate-y-1/2 text-black text-5xl "
        >
          &gt;
        </button>
        <img 
          src={imageSrc} 
          alt="Expanded view" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
