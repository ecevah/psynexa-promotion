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
import "@/styles/blog-item.css";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div
        className="layout flex breakpoint769:flex-row pt-[144px] pb-[80px] flex-col"
        id="blog"
      >
        <div className="flex flex-col breakpoint769:mr-[90px] breakpoint769:mb-0 mb-[30px] items-center breakpoint769:items-start mx-auto breakpoint769:mx-0">
          <BlueGradientTitleCard text="Son Paylaşımlar" />
          <div
            data-aos="fade-left"
            className="text-[50px] font-bold leading-[54px] text-[#0B1215] w-[350px] mt-[20px] mb-[40px] text-center breakpoint769:text-start"
          >
            Blog & Makale
          </div>
          <Link href={"/blog"}>
            <div
              data-aos="fade-left"
              className="flex flex-row items-center justify-center px-[24px] py-[14px] rounded-[32px] bg-[#0A6EBD] w-fit"
            >
              <Image src={EDIT_WHITE} width={24} height={24} alt="edit" />
              <div className="text-[20px] leading-[26px] text-white ml-[16px]">
                Daha Fazla Gör
              </div>
            </div>
          </Link>
        </div>
        <Swiper
          style={{ height: "460px" }}
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          centeredSlides={true}
          className="mySwiper"
          data-aos="fade-right"
          breakpoints={{
            1281: {
              slidesPerView: 1.99,
              spaceBetween: 50,
            },
          }}
        >
          {BLOG_ARRAY.map((item, index) => (
            <SwiperSlide key={`Blog Card ${index}`}>
              <div className="flex justify-center items-center">
                <BlogItem
                  title={item.title}
                  date={item.date}
                  image={item.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
