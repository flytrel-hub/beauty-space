import React, { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaTelegram, FaVk, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = memo(() => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    try {
      // Здесь будет логика отправки данных на сервер
      console.log('Подписка оформлена:', data);
      setIsSubscribed(true);
      reset();
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      console.error('Ошибка при подписке:', error);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">BeautySpace</h3>
            <p className="footer__text">
              Ваш путь к красоте и уверенности в себе начинается здесь. Профессиональные мастера и современное оборудование для создания вашего идеального образа.
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer__social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="footer__social-link"
              >
                <FaTelegram />
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VKontakte"
                className="footer__social-link"
              >
                <FaVk />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="footer__social-link"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Контакты</h4>
            <div className="footer__contacts">
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <p className="footer__text">г. Москва, ул. Красивая, 123</p>
              </div>
              <div className="footer__contact-item">
                <FaPhone className="footer__contact-icon" />
                <p className="footer__text">+7 (999) 123-45-67</p>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <p className="footer__text">info@beautyspace.ru</p>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Режим работы</h4>
            <div className="footer__schedule">
              <p className="footer__text">Пн-Пт: 9:00 - 21:00</p>
              <p className="footer__text">Сб-Вс: 10:00 - 20:00</p>
            </div>
            <div className="footer__newsletter">
              <h4 className="footer__subtitle">Подпишитесь на новости</h4>
              <p className="footer__text">Будьте в курсе наших акций и новинок</p>
              <form className="footer__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="footer__form-group">
                  <div className="footer__input-wrapper">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className={`footer__input ${errors.email ? 'footer__input--error' : ''}`}
                      aria-label="Email для подписки"
                      {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Некорректный email'
                        },
                        validate: value => {
                          if (!value.includes('@')) return 'Email должен содержать @';
                          if (!value.includes('.')) return 'Email должен содержать домен';
                          return true;
                        }
                      })}
                    />
                    {errors.email && (
                      <span className="footer__error">{errors.email.message}</span>
                    )}
                  </div>
                  <button 
                    type="submit" 
                    className="footer__button"
                    disabled={isSubscribed || errors.email}
                  >
                    {isSubscribed ? '✓' : '→'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} BeautySpace. Все права защищены.
          </p>
          <p className="footer__author">
            Разработано с ❤️ by{' '}
            <a href="https://github.com/flytrel-hub" target="_blank" rel="noopener noreferrer">
              Svetlana Okladnova
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
