// Importaciones necesarias de React y Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slider from './SwiperSlider'
import { dataPlans } from '../data';

// Instalar módulos necesarios de Swiper
SwiperCore.use([Pagination, Navigation]);

const SwiperSliderCanales = () => {
    return (

        <Swiper
            direction="horizontal" // Puedes cambiar a 'vertical' si lo prefieres
            loop={true}
            slidesPerView={3}
            pagination={false}
            navigation={false}
            modules={[Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            spaceBetween={20}
            
            scrollbar={{ draggable: true,el: '.custom-scrollbar-canal'  }}
            breakpoints={{
                // when window width is >= 640px

                0: {
                    slidesPerView: 2
                },
                // when window width is >= 768px
                600: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                900: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            className="mySwiper relative  border-2 border-black/50 z-[10]  w-full h-36 rounded-xl mb-16 mt-8 transition-all duration-100 ease-linear "

        >

            <SwiperSlide style={{display:"flex"}} className='w-full h-full flex justify-center items-center'>
                <img src="canales/espa.png" alt="" className=' sm:h-[94px] m-auto'/>
               {/*  <div className="custom-scrollbar mb-8"></div> */}
            </SwiperSlide>
            <SwiperSlide  style={{display:"flex"}} className=''>
            <img src="canales/National_Geographic_Channel.png" alt="" className='h-[94x] m-auto'/>

            </SwiperSlide>
            <SwiperSlide  style={{display:"flex"}} className='h-full flex justify-center items-center'>
            <img src="canales/disney_junior.png" alt="" className='h-[94px]  m-auto' />

            </SwiperSlide>
            <SwiperSlide  style={{display:"flex"}} className='h-full flex justify-center items-center'>
            <img src="canales/fox.png" alt="" className='h-[94px]  m-auto' />

            </SwiperSlide>
            <SwiperSlide  style={{display:"flex"}} className='h-full flex justify-center items-center'>
            <img src="canales/cartoon_network.png" alt="" className='h-[94px]  m-auto' />
            </SwiperSlide>
            <div className='custom-scrollbar-canal'>

            </div>

        </Swiper >
    )

};

export default SwiperSliderCanales;
