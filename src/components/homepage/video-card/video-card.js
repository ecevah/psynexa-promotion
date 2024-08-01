import { VIDEO_PLAY_ICON } from "@/constant/constant";
import Image from "next/image";
import React from "react";

export default function VideoCard() {
  return (
    <>
      <div className="layout flex flex-col justify-center items-center pt-[64px] pb-[264px]">
        <div
          className="linear-gradient-blue-text-reverse text-[36px] sm:text-[50px] leading-[40px] sm:leading-[54px] font-bold max-w-[550px] text-center w-[90%]"
          data-aos="fade-up"
        >
          Meet Us to Understand Your Mind
        </div>
        <div
          className="text-[17px] text-white font-light leading-[26px] text-center max-w-[510px] w-[90%] mt-[32px] mb-[64px]"
          data-aos="fade-up"
        >
          Lorem ipsum dolor sit amet consectetur. Diam amet rhoncus quisque sit.
          Ultricies facilisi pharetra eu elit feugiat.
        </div>
        <div
          className="w-full h-[450px] rounded-[32px] border-[0.3px] border-solid border-[#B3D4FC] bg-[#0B121533] flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <Image src={VIDEO_PLAY_ICON} width={100} height={100} alt="video" />
        </div>
      </div>
    </>
  );
}
