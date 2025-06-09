import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

const mockService = {
  id: 1,
  name: 'Чистка лица',
  category: 'Уход за лицом',
  price: 3000,
  duration: '60 мин',
  description: 'Глубокая очищающая процедура для всех типов кожи',
  image: '/images/facial-cleaning.jpg',
};

describe('ServiceCard Component', () => {
  test('рендерит информацию об услуге', () => {
    render(<ServiceCard service={mockService} />);

    // Проверка наличия названия услуги
    expect(screen.getByText(mockService.name)).toBeInTheDocument();

    // Проверка наличия категории
    expect(screen.getByText(mockService.category)).toBeInTheDocument();

    // Проверка наличия цены
    expect(screen.getByText(`${mockService.price} ₽`)).toBeInTheDocument();

    // Проверка наличия длительности
    expect(screen.getByText(mockService.duration)).toBeInTheDocument();

    // Проверка наличия описания
    expect(screen.getByText(mockService.description)).toBeInTheDocument();
  });

  test('рендерит изображение услуги', () => {
    render(<ServiceCard service={mockService} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockService.image);
    expect(image).toHaveAttribute('alt', mockService.name);
  });

  test('применяет правильные стили', () => {
    render(<ServiceCard service={mockService} />);

    const card = screen.getByRole('article');
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden');
  });
});
