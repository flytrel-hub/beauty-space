import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './HeroSection';

describe('HeroSection Component', () => {
  test('рендерит заголовок и подзаголовок', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    expect(screen.getByText(/Красота и уход/i)).toBeInTheDocument();
    expect(screen.getByText(/Профессиональный уход за собой/i)).toBeInTheDocument();
  });

  test('рендерит кнопку CTA', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const ctaButton = screen.getByRole('link', { name: /Записаться/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/contact');
  });

  test('рендерит фоновое изображение', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveStyle({
      backgroundImage: 'url(/images/hero-bg.jpg)',
    });
  });

  test('применяет анимацию появления', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveClass('fade-in');
  });
});
