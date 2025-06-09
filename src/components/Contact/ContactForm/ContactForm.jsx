import React, { useState } from 'react';
import './ContactForm.scss';

const ContactForm = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: service?.name || '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [progress, setProgress] = useState(0);

  const validateForm = () => {
    const newErrors = {};

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Имя не должно превышать 50 символов';
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите email';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }

    // Валидация телефона
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите номер телефона';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }

    // Валидация сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Сообщение не должно превышать 500 символов';
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
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    // Очищаем ошибку отправки при изменении формы
    if (submitError) {
      setSubmitError('');
    }
  };

  const simulateProgress = () => {
    return new Promise((resolve) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 10;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          resolve();
        }
        setProgress(currentProgress);
      }, 200);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setProgress(0);

    try {
      // Имитация отправки формы с прогресс-баром
      await simulateProgress();

      // Имитация случайной ошибки (10% шанс)
      if (Math.random() < 0.1) {
        throw new Error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
      }

      // Имитация задержки сервера
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Очищаем форму после успешной отправки
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: service?.name || '',
      });

      setIsSuccess(true);

      // Закрываем форму через 3 секунды после успешной отправки
      setTimeout(() => {
        setIsSuccess(false);
        if (onClose) {
          onClose();
        }
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        error.message || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.'
      );
    } finally {
      setIsSubmitting(false);
      setProgress(0);
    }
  };

  return (
    <div className="contact-form-container">
      {isSuccess ? (
        <div className="success-message">
          <h3>Спасибо за обращение!</h3>
          <p>Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {service && (
            <div className="form-group">
              <label>Выбранная услуга</label>
              <input type="text" value={service.name} disabled className="disabled" />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Ваше имя *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Введите ваше имя"
              maxLength={50}
              disabled={isSubmitting}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
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
              placeholder="Введите ваш email"
              disabled={isSubmitting}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
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
              disabled={isSubmitting}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Введите ваше сообщение"
              maxLength={500}
              disabled={isSubmitting}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          {submitError && <div className="submit-error">{submitError}</div>}

          {isSubmitting && (
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          )}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
