import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home Page', () => {
  test('рендерит все основные секции', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Проверяем наличие всех секций
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('services-overview')).toBeInTheDocument();
    expect(screen.getByTestId('why-us-section')).toBeInTheDocument();
    expect(screen.getByTestId('contact-block')).toBeInTheDocument();
  });

  test('применяет правильные отступы между секциями', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const sections = screen.getAllByRole('region');
    sections.forEach((section) => {
      expect(section).toHaveClass('py-16');
    });
  });

  test('обеспечивает правильную структуру документа', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Проверяем наличие основного контейнера
    expect(screen.getByRole('main')).toBeInTheDocument();

    // Проверяем, что все секции находятся внутри main
    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByTestId('hero-section'));
    expect(main).toContainElement(screen.getByTestId('services-overview'));
    expect(main).toContainElement(screen.getByTestId('why-us-section'));
    expect(main).toContainElement(screen.getByTestId('contact-block'));
  });
});
