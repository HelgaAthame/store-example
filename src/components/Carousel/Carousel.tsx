"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { type ReactNode } from "react";

interface Props {
  items: ReactNode[];
}

export const Carousel = ({ items }: Props) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={
        typeof window === "undefined" ? 3 : window.innerWidth / 200
      }
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay
      className="cursor-pointer"
      wrapperClass="p-4"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};
