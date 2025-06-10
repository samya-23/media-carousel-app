import React from 'react';
import './MediaCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MediaCarousel = ({ mediaItems }) => {
  return (
    <div className="media-carousel">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="swiper-wrapper-custom"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Slide ${index}`} />
            ) : (
              <iframe
                src={item.src}
                title={`Video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MediaCarousel;
