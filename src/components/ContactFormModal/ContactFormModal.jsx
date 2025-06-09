import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../General/Modal/Modal';
import './ContactFormModal.scss';

const ContactFormModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: service?.name || '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  console.log('Modal state: isSubmitting', isSubmitting, 'isSuccess', isSuccess);

  useEffect(() => {
    // Обновляем значение услуги при изменении пропса service
    if (service?.name) {
      setFormData(prev => ({
        ...prev,
        service: service.name
      }));
    }
  }, [service]);

  useEffect(() => {
    let interval;
    if (isSubmitting && !isSuccess) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 5;
          } else {
            clearInterval(interval);
            return prevProgress; 
          }
        });
      }, 100);
    } else {
      clearInterval(interval);
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isSubmitting, isSuccess]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^\+?[0-9\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    console.log('Setting isSubmitting to true');
    setProgress(0);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2300));
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: service?.name || '',
        message: '',
      });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    } finally {
      setIsSubmitting(false);
      console.log('Setting isSubmitting to false');
      setProgress(100);
    }
  };

  const handleClose = () => {
    onClose();
    setIsSuccess(false);
    console.log('Setting isSuccess to false on close');
    setErrors({});
    setProgress(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="contact-form-container">
        <h2 className="contact-form-title">
          {service ? 'Записаться на услугу' : 'Связаться с нами'}
        </h2>

        {isSuccess ? (
          <div className="contact-form-success">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3>Спасибо за заявку!</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
            <button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300" 
              onClick={handleClose}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Имя *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Введите ваше имя"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                placeholder="+7 (___) ___-__-__"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your@email.com"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {service ? (
              <div className="form-group">
                <label>Выбранная услуга</label>
                <input
                  type="text"
                  value={service.name}
                  disabled
                  className="disabled"
                />
              </div>
            ) : (
              <div className="form-group">
                <label htmlFor="service">Услуга</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                >
                  <option value="">Выберите услугу</option>
                  <option value="manicure">Маникюр</option>
                  <option value="pedicure">Педикюр</option>
                  <option value="makeup">Макияж</option>
                  <option value="haircut">Стрижка</option>
                  <option value="coloring">Окрашивание</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Дополнительная информация"
                rows="4"
              />
            </div>

            {isSubmitting && (
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-4 mb-4">
                <div 
                  className="h-full bg-accent transition-all duration-100 ease-linear" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}

            <button 
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

ContactFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default ContactFormModal;
