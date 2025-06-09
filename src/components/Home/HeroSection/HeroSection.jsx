import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../../context/ModalContext';
import './HeroSection.scss';

const HeroSection = () => {
  const { openModal } = useModal();

  return (
    <section
      className="hero-section relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center px-4 -mt-14 md:-mt-16"
      data-testid="hero-section"
      style={{
        backgroundImage: "url('/images/hero/home.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Контент */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-fade-in">
          Красота и уход
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 animate-fade-in-delay">
          Профессиональный уход за собой
        </p>
        <Link
          className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
          role="button"
          aria-label="Записаться на консультацию"
          onClick={openModal}
        >
          Записаться
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
