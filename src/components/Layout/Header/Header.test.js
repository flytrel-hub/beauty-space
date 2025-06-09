import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('рендерит логотип и навигационные ссылки', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Проверка наличия логотипа
    const logoElement = screen.getByText(/BeautySpace/i);
    expect(logoElement).toBeInTheDocument();

    // Проверка наличия навигационных ссылок
    const homeLink = screen.getByRole('link', { name: /Главная/i });
    const servicesLink = screen.getByRole('link', { name: /Услуги/i });
    const catalogLink = screen.getByRole('link', { name: /Каталог/i });
    const aboutLink = screen.getByRole('link', { name: /О нас/i });

    expect(homeLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('мобильное меню открывается и закрывается по клику', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Проверяем, что мобильное меню изначально скрыто
    const mobileMenu = screen.queryByRole('navigation', { hidden: true });
    expect(mobileMenu).not.toBeVisible();

    // Находим кнопку меню и кликаем по ней
    const menuButton = screen.getByRole('button', { name: /Открыть меню/i });
    fireEvent.click(menuButton);

    // Проверяем, что меню стало видимым
    expect(mobileMenu).toBeVisible();

    // Кликаем еще раз
    fireEvent.click(menuButton);

    // Проверяем, что меню снова скрыто
    expect(mobileMenu).not.toBeVisible();
  });

  test('навигационные ссылки имеют правильные пути', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const homeLink = screen.getByRole('link', { name: /Главная/i });
    const servicesLink = screen.getByRole('link', { name: /Услуги/i });
    const catalogLink = screen.getByRole('link', { name: /Каталог/i });
    const aboutLink = screen.getByRole('link', { name: /О нас/i });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(catalogLink).toHaveAttribute('href', '/catalog');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
