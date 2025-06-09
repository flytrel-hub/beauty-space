import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../../../General/LazyImage/LazyImage';
import './ServiceModalImage.scss';

const ServiceModalImage = ({ image, alt }) => {
  return (
    <div className="service-modal-image">
      <LazyImage
        src={image}
        alt={alt}
        className="service-modal-image__img"
      />
    </div>
  );
};

ServiceModalImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ServiceModalImage; 