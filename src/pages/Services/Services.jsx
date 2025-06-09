import React, { useState } from 'react';
import { services, categories } from '../../data/services';
import ServiceCard from '../../components/Service/ServiceCard/ServiceCard';
import PriceList from '../../components/Service/PriceList/PriceList';
import ServiceModal from '../../components/Service/ServiceModal/ServiceModal';
import SEO from '../../components/General/SEO/SEO';
import './Services.scss';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices =
    selectedCategory === 'Все услуги'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <SEO 
        title="Услуги"
        description="Широкий спектр услуг в нашем салоне красоты: парикмахерские услуги, маникюр, педикюр, косметология, массаж и многое другое. Профессиональный уход за вашей красотой."
        keywords="услуги салона красоты, парикмахерские услуги, маникюр, педикюр, косметология, массаж, уход за лицом, уход за телом"
        canonicalUrl="https://beauty-salon.ru/services"
      />
      <div className="services-page">
        {/* Секция с карточками услуг */}
        <div className="py-12 px-4 bg-neutral">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-nunito">
              Наши услуги
            </h1>

            {/* Фильтры */}
            <div className="filters mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-quicksand transition-colors duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white hover:bg-primary/20'
                    }`}
                    aria-label={`Фильтр: ${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Сетка услуг */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} onOpenModal={handleOpenModal} />
              ))}
            </div>
          </div>
        </div>

        {/* Секция с прайс-листом */}
        <PriceList />

        {/* Модальное окно с деталями услуги */}
        {isModalOpen && selectedService && (
          <ServiceModal service={selectedService} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Services;
