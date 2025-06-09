import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../../General/LazyImage/LazyImage';
import './CertificateGallery.scss';

const CertificateGallery = ({ certificates }) => {
  return (
    <div className="certificate-gallery" data-testid="certificate-gallery">
      {certificates.map((cert) => (
        <div key={cert.id} className="certificate-gallery__item">
          <LazyImage
            src={cert.image}
            alt={cert.title}
            className="certificate-gallery__image"
          />
          {/* <p className="certificate-gallery__title">{cert.title}</p> */}
        </div>
      ))}
    </div>
  );
};

CertificateGallery.propTypes = {
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CertificateGallery;
