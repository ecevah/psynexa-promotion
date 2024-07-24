import { TIME_WHITE } from "@/constant/constant";
import Image from "next/image";
import React from "react";

export default function SolutionsCard(props) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col p-[48px] rounded-[32px] border-[0.3px] border-solid border-[#EEF5FF] our-solution-card w-fit"
      >
        <Image
          src={TIME_WHITE}
          width={72}
          height={72}
          alt="time"
          className="p-[24px] rounded-full border-[0.2px] border-solid border-[rgba(255, 255, 255, 0.70)] time-bg"
        />
        <div className="text-[24px] font-bold leading-[26px] text-white mt-[32px] mb-[16px]">
          Başlık
        </div>
        <div className="text-[17px] font-light leading-[26px] text-white w-[300px]">
          Lorem ipsum dolor sit amet consectetur. Diam amet rhoncus quisque sit.
        </div>
      </div>
    </>
  );
}
