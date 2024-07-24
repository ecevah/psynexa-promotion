import React from "react";
import { ARROW_WHITE, EDIT_WHITE } from "@/constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import BlogItem from "./blog-item";
import { BLOG_ARRAY } from "@/constant/blogs";
import BlueGradientTitleCard from "../partner-component/blue-gradient-title-card";

export default function Blog() {
  return (
    <>
      <div className="layout flex flex-row pt-[144px] pb-[80px]">
        <div className="flex flex-col mr-[90px]">
          <BlueGradientTitleCard text="Our Latest News" />
          <div
            data-aos="fade-left"
            className="text-[50px] font-bold leading-[54px] text-[#0B1215] w-[350px] mt-[20px] mb-[40px]"
          >
            Latest News & Articles
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-row items-center justify-center px-[24px] py-[14px] rounded-[32px] bg-[#0A6EBD] w-fit"
          >
            <Image src={EDIT_WHITE} width={24} height={24} alt="edit" />
            <div className="text-[20px] leading-[26px] text-white ml-[16px]">
              See More
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1.99}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          data-aos="fade-right"
        >
          {BLOG_ARRAY.map((item, index) => (
            <SwiperSlide key={`Blog Card ${index}`}>
              <BlogItem
                title={item.title}
                date={item.date}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
