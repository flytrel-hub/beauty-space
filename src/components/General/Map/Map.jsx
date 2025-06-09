import React, { useEffect, useRef } from 'react';
import './Map.scss';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Загружаем API Яндекс Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=ru_RU';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Инициализация карты после загрузки API
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [55.76, 37.64], // Москва
          zoom: 15,
          controls: ['zoomControl', 'fullscreenControl'],
        });

        // Создаем метку
        const placemark = new window.ymaps.Placemark(
          [55.76, 37.64],
          {
            balloonContent: 'BeautySpace - Косметический салон',
          },
          {
            preset: 'islands#redDotIcon',
          }
        );

        // Добавляем метку на карту
        map.geoObjects.add(placemark);
      });
    };

    return () => {
      // Удаляем скрипт при размонтировании компонента
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" />
    </div>
  );
};

export default Map;
