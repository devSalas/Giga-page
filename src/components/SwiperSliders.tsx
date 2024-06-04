// Importaciones necesarias de React y Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Slider from './SwiperSlider'
import { dataPlans } from '../data';

// Instalar módulos necesarios de Swiper
SwiperCore.use([Pagination, Navigation]);

const SwiperSlider = () => {
  return (

    <Swiper
      direction="horizontal" // Puedes cambiar a 'vertical' si lo prefieres
      loop={true}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={20}
      /*     scrollbar={{ draggable: true }} */
      scrollbar={{ draggable: true, el: '.custom-scrollbar' }}
      breakpoints={{
        // when window width is >= 640px

        0: {
          slidesPerView: 1
        },
        // when window width is >= 768px
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"

    >
      {
        dataPlans.map(({ megasBefore, megasNow, price },index) => <SwiperSlide className='' key={index}>
          <Slider megasBefore={megasBefore} megasNow={megasNow} price={price} />
          <div className="custom-scrollbar mb-8"></div>
        </SwiperSlide>)
      }


    </Swiper >
  )

};

export default SwiperSlider;
