// Importaciones necesarias de React y Swiper
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { dataBanner } from '../data';




SwiperCore.use([Pagination, Navigation]);

const SwiperSliderHero = () => {
  return (

    <Swiper
      direction="horizontal" // Puedes cambiar a 'vertical' si lo prefieres
      loop={true}
      
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".hero-arrow-right",
        prevEl: ".hero-arrow-left"
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      className="mySwiper relative"

    >


      {
        dataBanner.map((banner, index) => (
          <SwiperSlide style={{ display: "flex" }} className='w-full  flex justify-center items-center ' key={banner.img + index}>


            <picture className='w-full'>
              <source srcSet={banner.img_mobile} media="(max-width: 767px)" />
              <source srcSet={banner.img} media="(min-width: 768px)" />
              <img src={banner.img}  className='select-none object-cover w-full  lg:h-auto sm:object-cover sm:h-auto' />
            </picture>


          </SwiperSlide>))
      }
      <div className='hero-arrow-left absolute z-50  top-1/2'>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
          <path d="M18.7923 0C8.41143 0 0.000640869 8.30031 0.000640869 18.5448C0.000640869 28.7894 8.41143 37.0897 18.7923 37.0897C29.1732 37.0897 37.584 28.7894 37.584 18.5448C37.584 8.30031 29.1732 0 18.7923 0ZM10.1618 17.2736L20.429 7.14125C21.1413 6.43835 22.293 6.43835 22.9977 7.14125L24.2858 8.41247C24.9981 9.11538 24.9981 10.252 24.2858 10.9474L16.5873 18.5448L24.2858 26.1422C24.9981 26.8451 24.9981 27.9818 24.2858 28.6772L22.9977 29.9484C22.2854 30.6513 21.1337 30.6513 20.429 29.9484L10.1618 19.816C9.44952 19.1131 9.44952 17.9765 10.1618 17.2736Z" fill="white"  className='fill-red-900' />
        </svg>

      </div>
      <div className='hero-arrow-right  absolute z-50  top-1/2 right-0'>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7917 0C29.1726 0 37.5833 8.30031 37.5833 18.5448C37.5833 28.7894 29.1726 37.0897 18.7917 37.0897C8.41079 37.0897 0 28.7894 0 18.5448C0 8.30031 8.41079 0 18.7917 0ZM27.4222 17.2736L17.155 7.14125C16.4427 6.43835 15.291 6.43835 14.5863 7.14125L13.2981 8.41247C12.5859 9.11538 12.5859 10.252 13.2981 10.9474L20.9967 18.5448L13.2981 26.1422C12.5859 26.8451 12.5859 27.9818 13.2981 28.6772L14.5863 29.9484C15.2985 30.6513 16.4503 30.6513 17.155 29.9484L27.4222 19.816C28.1345 19.1131 28.1345 17.9765 27.4222 17.2736Z"  className='fill-red-900' />
        </svg>

      </div>

    </Swiper >)

};

export default SwiperSliderHero;
