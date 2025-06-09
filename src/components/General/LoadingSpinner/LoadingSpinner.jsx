import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <div className="loading-spinner">
          <div className="loading-spinner__circle"></div>
        </div>
        <p className="mt-6 text-xl font-quicksand text-textMain">Загрузка...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
