import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.scss';

const ServiceCard = ({ service, onOpenModal }) => {
  const { name, price, duration, image, description } = service;

  const handleClick = (e) => {
    e.stopPropagation();
    onOpenModal(service);
  };

  return (
    <div
      className="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      data-testid="service-card"
      tabIndex={1}
      aria-label={`Карточка услуги ${name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-quicksand font-semibold mb-2 text-textMain">{name}</h3>

        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-nunito font-bold text-primary">{price} ₽</span>
          <span className="text-sm text-gray-600 font-nunito">{duration}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 font-nunito">{description}</p>

        <button
          onClick={handleClick}
          className="w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300 font-quicksand"
          aria-label={`Подробнее об услуге ${name}`}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ServiceCard;
