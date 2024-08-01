import React from "react";
import SolutionsCard from "./solutions-card";
import BlueGradientTitleCard from "../partner-component/blue-gradient-title-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "@/styles/solution.css";

export default function OurSolutions() {
  return (
    <>
      <div
        className="layout pt-[144px] breakpoint1295:pb-[158px] flex flex-col"
        id="solutions"
      >
        <div className="mx-auto breakpoint1025:mx-0">
          <BlueGradientTitleCard text="Our Solutions" />
        </div>
        <div className="flex flex-col justify-between items-center mt-[20px] mb-[152px] breakpoint1025:flex-row">
          <div
            data-aos="fade-right"
            className="linear-gradient-blue-text text-[45px] text-center sm:text-start sm:text-[50px] font-bold leading-[54px] w-[390px] breakpoint1025:mb-0 mb-5"
          >
            Push the Limits, Realize Dreams.
          </div>
          <div
            data-aos="fade-left"
            className="text-[17px] font-light leading-[26px] text-white max-w-[570px] w-[90%] text-center breakpoint1025:text-left"
          >
            Lorem ipsum dolor sit amet consectetur. Diam amet rhoncus quisque
            sit. Ultricies facilisi pharetra eu elit feugiat. Placerat lectus
            laoreet maecenas ullamcorper. Elementum feugiat sit consectetur at
            sit.
          </div>
        </div>
        <div className="hidden flex-row w-full justify-between breakpoint1295:flex">
          <SolutionsCard />
          <SolutionsCard />
          <SolutionsCard />
        </div>
      </div>
      <div className="breakpoint1295:mb-0 mb-[158px] block breakpoint1295:hidden">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          centeredSlides={true}
          initialSlide={2}
          className="mySwiper w-full "
          data-aos="fade-right"
          breakpoints={{
            840: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <SolutionsCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <SolutionsCard />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <SolutionsCard />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
