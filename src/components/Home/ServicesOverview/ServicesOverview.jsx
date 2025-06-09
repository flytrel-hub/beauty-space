import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data/services';
import './ServicesOverview.scss';

const ServicesOverview = () => {
  // Берем только первые 3 услуги для превью
  const previewServices = services.slice(0, 3);

  return (
    <section className="px-4 bg-neutral" data-testid="services-overview">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-textMain">
          Наши услуги
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              data-testid="service-card"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm">
                  {service.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-textMain">{service.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-accent">{service.price} ₽</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            role="button"
            aria-label="Посмотреть все услуги"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
