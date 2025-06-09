import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  test('рендерит Header и Footer', () => {
    render(
      <Router>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </Router>
    );

    // Проверяем наличие Header
    expect(screen.getByText(/BeautySpace/i)).toBeInTheDocument();

    // Проверяем наличие Footer
    expect(screen.getByText(/Контакты/i)).toBeInTheDocument();
    expect(screen.getByText(/Социальные сети/i)).toBeInTheDocument();
  });

  test('рендерит дочерние компоненты', () => {
    render(
      <Router>
        <Layout>
          <div data-testid="test-content">Test Content</div>
        </Layout>
      </Router>
    );

    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('применяет основные стили', () => {
    render(
      <Router>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </Router>
    );

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('min-h-screen');
    expect(mainElement).toHaveClass('flex');
    expect(mainElement).toHaveClass('flex-col');
  });
});
