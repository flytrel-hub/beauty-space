import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactBlock from './ContactBlock';

describe('ContactBlock Component', () => {
  test('рендерит заголовок секции', () => {
    render(
      <Router>
        <ContactBlock />
      </Router>
    );

    expect(screen.getByText(/Свяжитесь с нами/i)).toBeInTheDocument();
  });

  test('рендерит контактную информацию', () => {
    render(
      <Router>
        <ContactBlock />
      </Router>
    );

    expect(screen.getByText(/г\. Москва, ул\. Красивая, 123/i)).toBeInTheDocument();
    expect(screen.getByText(/\+7 \(999\) 123-45-67/i)).toBeInTheDocument();
    expect(screen.getByText(/info@beautyspace\.ru/i)).toBeInTheDocument();
  });

  test('рендерит кнопку записи', () => {
    render(
      <Router>
        <ContactBlock />
      </Router>
    );

    const bookButton = screen.getByRole('link', { name: /Записаться/i });
    expect(bookButton).toBeInTheDocument();
    expect(bookButton).toHaveAttribute('href', '/contact');
  });

  test('рендерит карту', () => {
    render(
      <Router>
        <ContactBlock />
      </Router>
    );

    const map = screen.getByTestId('map-container');
    expect(map).toBeInTheDocument();
  });

  test('отображает часы работы', () => {
    render(
      <Router>
        <ContactBlock />
      </Router>
    );

    expect(screen.getByText(/Пн-Пт: 9:00 - 21:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Сб-Вс: 10:00 - 20:00/i)).toBeInTheDocument();
  });

  test('применяет анимацию появления', () => {
    render(
      <Router>
        <ContactBlock />
      </Router>
    );

    const section = screen.getByTestId('contact-block');
    expect(section).toHaveClass('fade-in');
  });
});
