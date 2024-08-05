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
          <BlueGradientTitleCard text="Çözümümüz" />
        </div>
        <div className="flex flex-col justify-between items-center mt-[20px] mb-[152px] breakpoint1025:flex-row">
          <div
            data-aos="fade-right"
            className="linear-gradient-blue-text text-[40px] text-center sm:text-start breakpoint1025:text-start sm:text-[50px] font-bold leading-[54px] w-[400px] breakpoint1025:mb-0 mb-5"
          >
            Kendinin farkına var
          </div>
          <div
            data-aos="fade-left"
            className="text-[17px] font-light leading-[26px] text-white max-w-[570px] w-[90%] text-center breakpoint1025:text-start"
          >
            Psynexa, mental destek hizmeti almak isteyen herkese, kendilerini
            daha iyi anlamaları için bir ortam sunmayı amaçlar.
          </div>
        </div>
        <div className="hidden flex-row w-full justify-between breakpoint1295:flex">
          <SolutionsCard
            title="Nexabot"
            text="Nexabot, kişilerle iletişim kurarak meditasyonlar, egzersizler ve objektif testlerle duygusal dengeyi sağlamaya yardımcı olur."
          />
          <SolutionsCard
            title="Akıllı Saat Verilerinin Yorumlanması"
            text="Kişilerin akıllı saat verileri yapay zeka tarafından detaylı analiz edilerek, psikolojik rahatsızlıklara olan eğilimleri ölçülür."
          />
          <SolutionsCard
            title="Yapay Zeka Destekli Online Terapi"
            text="Psynexa, kişilere yetkin psikologlarla online terapi yapma imkanı sunar. Aynı zamanda, kişinin verilerini yapay zeka ile analiz ederek psikoloğa sunar ve terapi sürecini optimize etmeyi hedefler."
          />
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
              <SolutionsCard
                title="Nexabot"
                text="Nexabot, kişilerle iletişim kurarak meditasyonlar, egzersizler ve objektif testlerle duygusal dengeyi sağlamaya yardımcı olur."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <SolutionsCard
                title="Akıllı Saat Verilerinin Yorumlanması"
                text="Kişilerin akıllı saat verileri yapay zeka tarafından detaylı analiz edilerek, psikolojik rahatsızlıklara olan eğilimleri ölçülür."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <SolutionsCard
                title="Yapay Zeka Destekli Online Terapi"
                text="Psynexa, kişilere yetkin psikologlarla online terapi yapma imkanı sunar. Aynı zamanda, kişinin verilerini yapay zeka ile analiz ederek psikoloğa sunar ve terapi sürecini optimize etmeyi hedefler."
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
