import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      data-testid="modal-backdrop"
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative min-h-[250px] flex flex-col justify-center items-center"
        data-testid="modal-content"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Закрыть"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
