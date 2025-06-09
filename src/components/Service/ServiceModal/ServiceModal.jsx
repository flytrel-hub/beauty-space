import React from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../../General/LazyImage/LazyImage';
import './ServiceModal.scss';

const ServiceModal = ({ service, onClose }) => {
  const { name, description, image, price, duration } = service;

  return (
    <div className="service-modal-backdrop" onClick={onClose}>
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="grid">
          <div className="image-container">
            <LazyImage
              src={image}
              alt={name}
              className="service-modal-image"
            />
          </div>
          <div className="service-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="service-details">
              <p>Цена: {price} ₽</p>
              <p>Длительность: {duration} мин</p>
            </div>
            <button className="book-button" onClick={onClose}>
              Записаться
            </button>
          </div>
        </div>
        <button className="service-modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;
