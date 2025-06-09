import React from 'react';
import { FaUserMd, FaTools, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import './WhyUs.scss';

const advantages = [
  {
    id: 1,
    title: 'Профессиональные мастера',
    description: 'Опытные специалисты с многолетним стажем',
    icon: FaUserMd,
  },
  {
    id: 2,
    title: 'Современное оборудование',
    description: 'Используем только современные технологии',
    icon: FaTools,
  },
  {
    id: 3,
    title: 'Индивидуальный подход',
    description: 'Учитываем все пожелания клиентов',
    icon: FaUserFriends,
  },
  {
    id: 4,
    title: 'Удобное расположение',
    description: 'В центре города с удобной парковкой',
    icon: FaMapMarkerAlt,
  },
];

const WhyUs = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white" data-testid="why-us-section">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-textMain font-nunito">
          Почему выбирают нас
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div
                key={advantage.id}
                className="text-center p-4 sm:p-6 rounded-lg bg-neutral hover:bg-accent/10 transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-accent text-white"
                  data-testid="advantage-icon"
                >
                  <Icon className="text-xl sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-textMain font-quicksand">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-nunito">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
