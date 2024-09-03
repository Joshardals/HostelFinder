"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export function HostelCard() {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      navigation={true}
      speed={700}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full rounded-xl"
    >
      <SwiperSlide className="w-full bg-black">
        <div className="h-[15rem] max-sm:h-[25rem]">Hey</div>
      </SwiperSlide>
      <SwiperSlide className="w-full bg-black/90">Hey</SwiperSlide>
      <SwiperSlide className="w-full bg-black/80">Hey</SwiperSlide>
    </Swiper>
  );
}
