import React from 'react'
import './Slide.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper/core'
import pic1 from '../../assets/hc2024-cn2.jpg'
import pic2 from '../../assets/hwcloud-828-2024.jpg'

SwiperCore.use([Autoplay, Pagination])

const Slide = () => {
  return (
    <div className='slide-box'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
      >
        <SwiperSlide>
          <img src={pic1} alt="First slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="Second slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slide

