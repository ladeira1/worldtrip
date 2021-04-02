import { Box } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperItem } from './SwiperItem';

SwiperCore.use([Navigation, Pagination])

export function ContinentSwiper() {
  return (
    <Box w="90%" mx="auto" >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SwiperItem 
            name="Europa" 
            description="O continente mais antigo." 
            imageUrl="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1379&q=80" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem 
            name="África" 
            description="O segundo maior continente." 
            imageUrl="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem 
            name="Ásia" 
            description="O continente oriental." 
            imageUrl="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem 
            name="Amérida do Sul" 
            description="To aqui." 
            imageUrl="https://images.unsplash.com/photo-1591533985302-42123fa9240b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem 
            name="Amérida do Norte" 
            description="Falta de criatividade." 
            imageUrl="https://images.unsplash.com/photo-1606190359155-1a243ab73704?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};