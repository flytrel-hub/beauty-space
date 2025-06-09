import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { id, name, brand, price, image, description } = product;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
      data-testid="product-card"
    >
      {/* Изображение товара - делаем его кликабельным */}
      <div
        className="relative aspect-square overflow-hidden cursor-pointer"
        onClick={handleViewDetails}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleViewDetails();
          }
        }}
        tabIndex={0}
        role="link"
        aria-label={`Посмотреть подробнее о ${name}`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Информация о товаре */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-quicksand font-semibold mb-1 text-textMain flex-grow">
          {name}
        </h3>

        <p className="text-sm text-gray-500 font-nunito mb-2">{brand}</p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-nunito font-bold text-price">{price} ₽</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 font-nunito">{description}</p>

        {/* Кнопка - теперь также ведет на детальную страницу */}
        <button
          className="w-full py-2 px-4 bg-secondary hover:bg-secondary-dark text-textMain rounded-md transition-colors duration-300 font-quicksand mt-auto"
          onClick={handleViewDetails}
          aria-label={`Узнать больше о ${name}`}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
