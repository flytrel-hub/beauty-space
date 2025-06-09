import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
  test('рендерит все поля формы', () => {
    render(<ContactForm />);

    // Проверка наличия полей
    expect(screen.getByLabelText(/имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/телефон/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/сообщение/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /отправить/i })).toBeInTheDocument();
  });

  test('показывает ошибки валидации при пустых полях', async () => {
    render(<ContactForm />);

    // Нажимаем кнопку отправки без заполнения полей
    const submitButton = screen.getByRole('button', { name: /отправить/i });
    fireEvent.click(submitButton);

    // Проверяем сообщения об ошибках
    await waitFor(() => {
      expect(screen.getByText(/введите имя/i)).toBeInTheDocument();
      expect(screen.getByText(/введите телефон/i)).toBeInTheDocument();
      expect(screen.getByText(/введите email/i)).toBeInTheDocument();
      expect(screen.getByText(/введите сообщение/i)).toBeInTheDocument();
    });
  });

  test('показывает ошибку при неверном формате email', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'invalid-email');

    const submitButton = screen.getByRole('button', { name: /отправить/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/введите корректный email/i)).toBeInTheDocument();
    });
  });

  test('показывает ошибку при неверном формате телефона', async () => {
    render(<ContactForm />);

    const phoneInput = screen.getByLabelText(/телефон/i);
    await userEvent.type(phoneInput, '123');

    const submitButton = screen.getByRole('button', { name: /отправить/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/введите корректный номер телефона/i)).toBeInTheDocument();
    });
  });

  test('успешно отправляет форму при корректных данных', async () => {
    render(<ContactForm />);

    // Заполняем форму корректными данными
    await userEvent.type(screen.getByLabelText(/имя/i), 'Иван Иванов');
    await userEvent.type(screen.getByLabelText(/телефон/i), '+7 (999) 123-45-67');
    await userEvent.type(screen.getByLabelText(/email/i), 'ivan@example.com');
    await userEvent.type(screen.getByLabelText(/сообщение/i), 'Тестовое сообщение');

    const submitButton = screen.getByRole('button', { name: /отправить/i });
    fireEvent.click(submitButton);

    // Проверяем успешную отправку
    await waitFor(() => {
      expect(screen.getByText(/сообщение отправлено/i)).toBeInTheDocument();
    });
  });

  test('очищает форму после успешной отправки', async () => {
    render(<ContactForm />);

    // Заполняем форму
    const nameInput = screen.getByLabelText(/имя/i);
    const phoneInput = screen.getByLabelText(/телефон/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/сообщение/i);

    await userEvent.type(nameInput, 'Иван Иванов');
    await userEvent.type(phoneInput, '+7 (999) 123-45-67');
    await userEvent.type(emailInput, 'ivan@example.com');
    await userEvent.type(messageInput, 'Тестовое сообщение');

    const submitButton = screen.getByRole('button', { name: /отправить/i });
    fireEvent.click(submitButton);

    // Проверяем очистку полей
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(phoneInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });
});
