import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LazyImage.scss';

const LazyImage = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={`lazy-image-container ${className || ''}`}
      style={{ width, height }}
    >
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton" />
        </div>
      )}
      <img
        src={error ? process.env.PUBLIC_URL + '/images/placeholder.jpg' : src}
        alt={alt}
        className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        width={width}
        height={height}
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LazyImage; 