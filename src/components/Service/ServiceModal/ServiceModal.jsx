import React from 'react';
import PropTypes from 'prop-types';
import ServiceModalImage from './ServiceModalImage/ServiceModalImage';
import { useModal } from '../../../context/ModalContext';
import './ServiceModal.scss';

const ServiceModal = ({ service, onClose }) => {
  const { name, description, image, price, duration } = service;
  const { openModal } = useModal();

  const handleBooking = () => {
    onClose(); // Закрываем модальное окно услуги
    openModal(service); // Открываем модальное окно формы записи с информацией об услуге
  };

  return (
    <div className="service-modal-backdrop" onClick={onClose}>
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="service-modal-grid">
          <ServiceModalImage image={image} alt={name} />
          <div className="service-modal-info">
            <div>
              <span className="service-modal-category">
                Услуга
              </span>
              <h2 className="service-modal-title">
                {name}
              </h2>
            </div>
            
            <div className="service-modal-details">
              <div className="service-modal-duration">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{duration} мин</span>
              </div>
              <div className="service-modal-price">
                {price} ₽
              </div>
            </div>

            <div className="service-modal-description">
              <h3>Описание</h3>
              <p>{description}</p>
            </div>

            <button 
              className="service-modal-button"
              onClick={handleBooking}
            >
              Записаться
            </button>
          </div>
        </div>
        
        <button 
          className="service-modal-close"
          onClick={onClose}
        >
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
