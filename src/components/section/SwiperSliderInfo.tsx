// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LinkWhatsaapCustomer } from '../../data';

export default () => {
  return (
    <div className='m-auto  '>
      <div className='relative     flex justify-center items-center m-auto gap-4'>
        <div className=' info-arrow-left  z-50  top-1/2 left-4'>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
            <path d="M18.7923 0C8.41143 0 0.000640869 8.30031 0.000640869 18.5448C0.000640869 28.7894 8.41143 37.0897 18.7923 37.0897C29.1732 37.0897 37.584 28.7894 37.584 18.5448C37.584 8.30031 29.1732 0 18.7923 0ZM10.1618 17.2736L20.429 7.14125C21.1413 6.43835 22.293 6.43835 22.9977 7.14125L24.2858 8.41247C24.9981 9.11538 24.9981 10.252 24.2858 10.9474L16.5873 18.5448L24.2858 26.1422C24.9981 26.8451 24.9981 27.9818 24.2858 28.6772L22.9977 29.9484C22.2854 30.6513 21.1337 30.6513 20.429 29.9484L10.1618 19.816C9.44952 19.1131 9.44952 17.9765 10.1618 17.2736Z" fill="white" className='fill-red-900' />
          </svg>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: `.info-arrow-left`,  // Corregido con prefijo de clase
            nextEl: `.info-arrow-right`,  // Corregido con prefijo de clase
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

          breakpoints={{
            // when window width is >= 640px

            0: {
              slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
          }}
          className='bg-gren-500 flex justify-center items-center m-auto max-w-[700px]'

        >
          <SwiperSlide >
            <div className="bg-primary relative max-w-[300px] text-black rounded-xl p-4 flex gap-2 flex-col justify-center items-center m-auto">
              <p className="text-secondary font-bold">
                Consulta tu <br /><span className="text-cfourth font-extrabold"
                >Cobertura </span>
              </p>
              <a href='/cobertura' 
                className="bg-secondary py-2 px-6 text-cprimary rounded-full hover:bg-custom-gradient-global "
              >
                Aqui
              </a>

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="bg-primary relative max-w-[300px] text-black rounded-xl p-4 flex gap-2 flex-col justify-center items-center m-auto">
              <p className="text-secondary font-bold text-center">
                Consulta Nuestras <br /> <span className="text-cfourth font-extrabold"
                >Promociones</span>
              </p>
              <a href={LinkWhatsaapCustomer}
                className="bg-secondary py-2 px-6 text-cprimary rounded-full hover:bg-custom-gradient-global"
              >Aqui
              </a>

            </div>
          </SwiperSlide>
        </Swiper>
        <div className=' info-arrow-right relative  z-50  top-1/2 right-0'>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7917 0C29.1726 0 37.5833 8.30031 37.5833 18.5448C37.5833 28.7894 29.1726 37.0897 18.7917 37.0897C8.41079 37.0897 0 28.7894 0 18.5448C0 8.30031 8.41079 0 18.7917 0ZM27.4222 17.2736L17.155 7.14125C16.4427 6.43835 15.291 6.43835 14.5863 7.14125L13.2981 8.41247C12.5859 9.11538 12.5859 10.252 13.2981 10.9474L20.9967 18.5448L13.2981 26.1422C12.5859 26.8451 12.5859 27.9818 13.2981 28.6772L14.5863 29.9484C15.2985 30.6513 16.4503 30.6513 17.155 29.9484L27.4222 19.816C28.1345 19.1131 28.1345 17.9765 27.4222 17.2736Z" className='fill-red-900' />
          </svg>

        </div>
      </div>
    </div>
  );
};