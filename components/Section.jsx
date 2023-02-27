import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainHover from './MainHover';
import BarberShopSelect from './BarberShopSelect';
import 'swiper/css';
import { motion } from 'framer-motion';
function Section() {
  return (
    <div className="">
        <div>
        <motion.div className='w-fit bg-blue-500 cursor-pointer m-auto mb-20 rounded-2xl p-2'
        initial={{scale:1}}
        whileHover={{scale:1.2}}
        >
            <h1 className='text-white text-xl'>بهترین دانش آموزان</h1>
        </motion.div>
        <Swiper
          spaceBetween={1}
          slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='ml-12'><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
          <SwiperSlide><MainHover/></SwiperSlide>
        </Swiper>
        </div>
        <div className='mt-32'>
        <motion.div className='w-fit bg-blue-500 cursor-pointer m-auto mb-20 rounded-2xl p-2'
        initial={{scale:1}}
        whileHover={{scale:1.2}}
        >
            <h1 className='text-white text-xl'>جدیدترین اثار</h1>
        </motion.div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='mr-40'
        >
          <SwiperSlide className='ml-16'><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
        </Swiper>
        </div>
        <div className='mt-32'>
        <motion.div className='w-fit bg-blue-500 cursor-pointer m-auto mb-20 rounded-2xl p-2'
        initial={{scale:1}}
        whileHover={{scale:1.2}}
        >
            <h1 className='text-white text-xl'>بهترین اثار</h1>
        </motion.div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='mr-40'
        >
          <SwiperSlide className='ml-16'><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
          <SwiperSlide><BarberShopSelect/></SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Section