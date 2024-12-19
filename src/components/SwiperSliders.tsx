// Importaciones necesarias de React y Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Slider from './SwiperSlider'
import { dataPlans } from '../data';
import styles from './SwiperSliders.module.css';

// Instalar módulos necesarios de Swiper
SwiperCore.use([Pagination, Navigation]);

const SwiperSlider = () => {
  return (
    <div className=' relative '>
      <div className={`question-arrow-left absolute  z-10  top-1/2 left-0`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 39" fill="none">
          <path d="M1.77293 16.131L28.2236 0.493542C30.3728 -0.776392 33.6641 0.45597 33.6641 3.59699V34.8644C33.6641 37.6823 30.6057 39.3806 28.2236 37.9679L1.77293 22.3379C-0.58659 20.9477 -0.594105 17.5212 1.77293 16.131Z" fill="#860526" />
        </svg>


      </div>

      <div className={`question-arrow-right absolute  z-10  top-1/2 -right-0 `}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 39" fill="none">
          <path d="M31.8911 16.131L5.44043 0.493542C3.29131 -0.776392 0 0.45597 0 3.59699V34.8644C0 37.6823 3.05836 39.3806 5.44043 37.9679L31.8911 22.3379C34.2507 20.9477 34.2582 17.5212 31.8911 16.131Z" fill="#860526" />
        </svg>
      </div>

      <Swiper
        direction="horizontal" // Puedes cambiar a 'vertical' si lo prefieres
        loop={true}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.question-arrow-right`,  // Corregido con prefijo de clase
          prevEl: `.question-arrow-left`,  // Corregido con prefijo de clase
        }}
        spaceBetween={20}
        /*     scrollbar={{ draggable: true }} */
        scrollbar={{ draggable: true, el: '.custom-scrollbar1' }}
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
            spaceBetween: 20,
          },
        }}
        className=" mySwiper  px-32"

      >


        {
          dataPlans.map(({ megasBefore, megasNow, price }, index) => <SwiperSlide className='px-10' key={index + price}>
            <Slider megasBefore={megasBefore} megasNow={megasNow} price={price} />
            <div className="custom-scrollbar1 mb-8"></div>

          </SwiperSlide>)
        }


      </Swiper >
    </div>
  )

};

export default SwiperSlider;
