import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './core/App';
import { ModalProvider, useModal } from './context/ModalContext';
import ContactFormModal from './components/ContactFormModal/ContactFormModal';
import './styles/globals.scss';

// Обработка ошибки message port
window.addEventListener('error', (event) => {
  if (event.message.includes('message port closed')) {
    event.preventDefault();
  }
});

const Root = () => {
  const { isModalOpen, closeModal, selectedService } = useModal();

  return (
    <HashRouter>
      <HelmetProvider>
        <App />
        <ContactFormModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          service={selectedService}
        />
      </HelmetProvider>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <Root />
  </ModalProvider>
);
