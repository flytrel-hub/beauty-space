import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SalonGallery.scss';

const SalonGallery = ({ photos }) => {
  return (
    <div className="salon-gallery" data-testid="salon-gallery">
      <Swiper
        className="my-salon-swiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 40,
          },
        }}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img src={photo.image} alt={photo.alt} className="salon-gallery__image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SalonGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SalonGallery;
