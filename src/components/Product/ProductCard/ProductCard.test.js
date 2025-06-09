import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  name: 'Увлажняющий крем',
  brand: 'Premium Care',
  price: 2800,
  category: 'Уход за лицом',
  description: 'Интенсивное увлажнение для сухой кожи',
  image: '/images/cream-placeholder.jpg',
  volume: '50 мл',
  inStock: true,
};

describe('ProductCard Component', () => {
  test('рендерит информацию о товаре', () => {
    render(<ProductCard product={mockProduct} />);

    // Проверка наличия названия товара
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();

    // Проверка наличия бренда
    expect(screen.getByText(mockProduct.brand)).toBeInTheDocument();

    // Проверка наличия цены
    expect(screen.getByText(`${mockProduct.price} ₽`)).toBeInTheDocument();

    // Проверка наличия категории
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

    // Проверка наличия объема
    expect(screen.getByText(mockProduct.volume)).toBeInTheDocument();

    // Проверка наличия описания
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  test('рендерит изображение товара', () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
    expect(image).toHaveAttribute('alt', mockProduct.name);
  });

  test('отображает статус наличия товара', () => {
    render(<ProductCard product={mockProduct} />);

    const inStockElement = screen.getByText('В наличии');
    expect(inStockElement).toBeInTheDocument();
    expect(inStockElement).toHaveClass('text-green-600');
  });

  test('применяет правильные стили', () => {
    render(<ProductCard product={mockProduct} />);

    const card = screen.getByRole('article');
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden');
  });
});
