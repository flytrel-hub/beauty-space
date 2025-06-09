import React, { memo } from 'react';
import { FaInstagram, FaTelegram, FaVk, FaPinterest } from 'react-icons/fa';
import './Footer.scss';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">BeautySpace</h3>
            <p className="footer__text">
              Современный косметический салон с профессиональными мастерами
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Контакты</h4>
            <p className="footer__text">📍 г. Москва, ул. Красивая, 123</p>
            <p className="footer__text">📞 +7 (999) 123-45-67</p>
            <p className="footer__text">✉️ info@beautyspace.ru</p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Социальные сети</h4>
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
