import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('рендерит контактную информацию', () => {
    render(<Footer />);

    // Проверка наличия контактной информации
    expect(screen.getByText(/г\. Москва, ул\. Красивая, 123/i)).toBeInTheDocument();
    expect(screen.getByText(/\+7 \(999\) 123-45-67/i)).toBeInTheDocument();
    expect(screen.getByText(/info@beautyspace\.ru/i)).toBeInTheDocument();
  });

  test('рендерит социальные сети', () => {
    render(<Footer />);

    // Проверка наличия иконок социальных сетей
    const socialIcons = screen.getAllByRole('link', { name: /социальная сеть/i });
    expect(socialIcons).toHaveLength(4); // Instagram, Telegram, VK, Pinterest
  });

  test('рендерит копирайт', () => {
    render(<Footer />);

    // Проверка наличия копирайта
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear} BeautySpace`, 'i'))).toBeInTheDocument();
  });

  test('социальные сети имеют правильные ссылки', () => {
    render(<Footer />);

    // Проверка ссылок на социальные сети
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    const telegramLink = screen.getByRole('link', { name: /telegram/i });
    const vkLink = screen.getByRole('link', { name: /vk/i });
    const pinterestLink = screen.getByRole('link', { name: /pinterest/i });

    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/beautyspace');
    expect(telegramLink).toHaveAttribute('href', 'https://t.me/beautyspace');
    expect(vkLink).toHaveAttribute('href', 'https://vk.com/beautyspace');
    expect(pinterestLink).toHaveAttribute('href', 'https://pinterest.com/beautyspace');
  });
});
