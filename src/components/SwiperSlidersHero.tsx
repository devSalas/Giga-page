// Importaciones necesarias de React y Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import Slider from './SwiperSlider'
import { dataBanner, dataPlans } from '../data';

// Instalar módulos necesarios de Swiper
SwiperCore.use([Pagination, Navigation]);

const SwiperSliderHero = () => {
  return (

    <Swiper
      direction="horizontal" // Puedes cambiar a 'vertical' si lo prefieres
      loop={true}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={true}
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"

    >


      {
        dataBanner.map((banner, index) => (
          <SwiperSlide style={{ display: "flex" }} className='w-full  flex justify-center items-center ' key={banner.img + index}>

           
            <picture className='w-full'>
              <source srcSet={banner.img_mobile} media="(max-width: 767px)" />
              <source srcSet={banner.img} media="(min-width: 768px)" />
              <img src={banner.img} className='select-none object-cover w-full  lg:h-auto sm:object-cover sm:h-auto' />
            </picture>


          </SwiperSlide>))
      }

    </Swiper >)

};

export default SwiperSliderHero;
