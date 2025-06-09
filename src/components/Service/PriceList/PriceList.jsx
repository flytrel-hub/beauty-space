import React, { useState, useRef } from 'react';
import { services, categories } from '../../../data/services';
import html2pdf from 'html2pdf.js';
import './PriceList.scss';

const PriceList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const priceListRef = useRef(null);

  const filteredServices =
    selectedCategory === 'Все услуги'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  // Группируем услуги по категориям
  const groupedServices = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const handleDownloadPDF = () => {
    const element = priceListRef.current;

    // Создаем клон элемента для PDF
    const clone = element.cloneNode(true);

    // Добавляем специальные классы для PDF
    clone.classList.add('pdf-version');

    // Создаем временный контейнер
    const container = document.createElement('div');
    container.appendChild(clone);

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'price-list.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
        letterRendering: true,
        backgroundColor: '#ffffff',
      },
      jsPDF: {
        unit: 'in',
        format: 'a4',
        orientation: 'portrait',
      },
    };

    // Генерируем PDF из клона
    html2pdf().set(opt).from(clone).save();
  };

  return (
    <div className="price-list py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Шапка прайс-листа */}
        <div className="price-list-header mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-nunito text-primary">
                Прайс-лист
              </h2>
              <p className="text-gray-600 mt-2 font-nunito">
                Актуальные цены на все услуги салона красоты
              </p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 font-quicksand shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Скачать прайс-лист"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Скачать PDF
            </button>
          </div>

          {/* Фильтры */}
          <div className="filters">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-quicksand transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white hover:bg-primary/10 border border-gray-200'
                  }`}
                  aria-label={`Фильтр: ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Таблица цен */}
        <div className="overflow-x-auto rounded-2xl shadow-xl" ref={priceListRef}>
          {/* PDF Header */}
          <div className="pdf-header hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-primary mb-2">BeautySpace</h1>
                <p className="text-gray-600">
                  Современный косметический салон с профессиональными мастерами
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">г. Москва, ул. Красивая, 123</p>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
                <p className="text-gray-600">info@beautyspace.ru</p>
              </div>
            </div>
            <div className="border-t border-b border-gray-200 py-4 mb-8">
              <h2 className="text-xl font-bold text-center text-primary">Прайс-лист услуг</h2>
              <p className="text-center text-gray-600 mt-2">
                Актуально на {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="px-8 py-5 text-left font-quicksand font-semibold text-primary">
                  Услуга
                </th>
                <th className="px-8 py-5 text-left font-quicksand font-semibold text-primary">
                  Длительность
                </th>
                <th className="px-8 py-5 text-right font-quicksand font-semibold text-primary">
                  Стоимость
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupedServices).map(([category, services]) => (
                <React.Fragment key={category}>
                  <tr className="bg-primary/5">
                    <td colSpan="3" className="px-8 py-4 font-quicksand font-semibold text-primary">
                      {category}
                    </td>
                  </tr>
                  {services.map((service) => (
                    <tr
                      key={service.id}
                      className="border-b border-gray-100 hover:bg-neutral/50 transition-colors duration-200"
                    >
                      <td className="px-8 py-5 font-nunito">{service.name}</td>
                      <td className="px-8 py-5 text-gray-600 font-nunito">{service.duration}</td>
                      <td className="px-8 py-5 text-right font-nunito font-semibold text-primary">
                        {service.price} ₽
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* PDF Footer */}
          <div className="pdf-footer hidden">
            <div className="border-t border-gray-200 mt-8 pt-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-primary mb-2">Режим работы:</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 20:00</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} BeautySpace. Все права защищены.
                  </p>
                  <p className="mt-1 text-gray-500 text-sm">
                    * Цены указаны в рублях и могут меняться в зависимости от сложности работы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Примечание */}
        <div className="mt-12 text-center text-gray-600 font-nunito bg-neutral/30 p-6 rounded-xl">
          <p className="text-lg">
            * Цены указаны в рублях и могут меняться в зависимости от сложности работы
          </p>
          <p className="mt-2 text-lg">** Точную стоимость уточняйте у администратора</p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
