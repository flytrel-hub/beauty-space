import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ServicesOverview from './ServicesOverview';
import { services } from '../../../data/services';

describe('ServicesOverview Component', () => {
  test('рендерит заголовок секции', () => {
    render(
      <Router>
        <ServicesOverview />
      </Router>
    );

    expect(screen.getByText(/Наши услуги/i)).toBeInTheDocument();
  });

  test('рендерит карточки услуг', () => {
    render(
      <Router>
        <ServicesOverview />
      </Router>
    );

    // Проверяем наличие карточек услуг
    const serviceCards = screen.getAllByTestId('service-card');
    expect(serviceCards).toHaveLength(3); // Показываем только 3 услуги
  });

  test('отображает правильную информацию в карточках', () => {
    render(
      <Router>
        <ServicesOverview />
      </Router>
    );

    // Проверяем первую карточку
    expect(screen.getByText(services[0].name)).toBeInTheDocument();
    expect(screen.getByText(`${services[0].price} ₽`)).toBeInTheDocument();
    expect(screen.getByText(services[0].duration)).toBeInTheDocument();
  });

  test('рендерит кнопку "Все услуги"', () => {
    render(
      <Router>
        <ServicesOverview />
      </Router>
    );

    const allServicesButton = screen.getByRole('link', { name: /Все услуги/i });
    expect(allServicesButton).toBeInTheDocument();
    expect(allServicesButton).toHaveAttribute('href', '/services');
  });

  test('применяет анимацию появления', () => {
    render(
      <Router>
        <ServicesOverview />
      </Router>
    );

    const section = screen.getByTestId('services-overview');
    expect(section).toHaveClass('fade-in');
  });
});
