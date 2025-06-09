import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useModal } from '../../../context/ModalContext';
import './ContactBlock.scss';

const ContactBlock = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 px-4 bg-neutral" data-testid="contact-block">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-textMain">
          Свяжитесь с нами
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Красивая, 123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <a
                    href="tel:+79991234567"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:info@beautyspace.ru"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    info@beautyspace.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaClock className="text-accent text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 20:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="inline-block w-full text-center bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={openModal}
              >
                Записаться
              </button>
            </div>
          </div>

          {/* Карта */}
          <div
            className="rounded-lg overflow-hidden shadow-md h-[400px]"
            data-testid="map-container"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A123456789&amp;source=constructor"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта с расположением салона"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
