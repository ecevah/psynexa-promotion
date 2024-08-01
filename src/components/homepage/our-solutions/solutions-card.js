import { TIME_WHITE } from "@/constant/constant";
import Image from "next/image";
import React from "react";

export default function SolutionsCard(props) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col p-[48px] rounded-[32px] border-[0.3px] border-solid border-[#EEF5FF] our-solution-card max-w-[400px] w-[95%]"
      >
        <div className="flex justify-center items-center w-[72px] h-[72px] p-[20px] rounded-full border-[0.2px] border-solid border-[rgba(255, 255, 255, 0.70)] time-bg ">
          <Image src={TIME_WHITE} width={24} height={24} alt="time" />
        </div>

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
