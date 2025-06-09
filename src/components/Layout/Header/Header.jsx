import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../../context/ModalContext';
import './Header.scss';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const handleOpenForm = () => {
    console.log('handleOpenForm called');
    setIsMenuOpen(false); // Закрываем мобильное меню при открытии формы
    openModal();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header className="bg-primary shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <nav className="flex justify-between items-center">
          {/* Логотип */}
          <Link
            to="/"
            className="text-xl md:text-2xl logo font-bold text-textMain hover:text-primary-dark transition-colors"
            aria-label="BeautySpace - Главная страница"
          >
            BeautySpace
          </Link>

          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-nunito">
              <li>
                <Link
                  to="/"
                  className="text-textMain hover:text-primary-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-dark after:transition-all hover:after:w-full"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-textMain hover:text-primary-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-dark after:transition-all hover:after:w-full"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-textMain hover:text-primary-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-dark after:transition-all hover:after:w-full"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-textMain hover:text-primary-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-dark after:transition-all hover:after:w-full"
                >
                  О нас
                </Link>
              </li>
            </ul>

            {/* Кнопка записи для десктопа */}
            <button
              onClick={handleOpenForm}
              className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Записаться
            </button>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            className="md:hidden p-1.5 rounded-md hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleKeyDown}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-textMain"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Мобильное меню */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 bg-primary shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <ul className="py-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-textMain hover:bg-accent/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-textMain hover:bg-accent/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block px-4 py-2 text-textMain hover:bg-accent/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-textMain hover:bg-accent/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
            </li>
            {/* Кнопка записи для мобильной версии */}
            <li className="px-4 py-2">
              <button
                onClick={handleOpenForm}
                className="block w-full text-center bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
              >
                Записаться
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
