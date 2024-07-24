import React from "react";
import SolutionsCard from "./solutions-card";
import BlueGradientTitleCard from "../partner-component/blue-gradient-title-card";

export default function OurSolutions() {
  return (
    <>
      <div className="layout pt-[144px] pb-[158px] flex flex-col ">
        <BlueGradientTitleCard text="Our Solutions" />
        <div className="flex flex-row justify-between items-center mt-[20px] mb-[152px]">
          <div
            data-aos="fade-right"
            className="linear-gradient-blue-text text-[50px] font-bold leading-[54px] w-[390px]"
          >
            Push the Limits, Realize Dreams.
          </div>
          <div
            data-aos="fade-left"
            className="text-[17px] font-light leading-[26px] text-white w-[570px]"
          >
            Lorem ipsum dolor sit amet consectetur. Diam amet rhoncus quisque
            sit. Ultricies facilisi pharetra eu elit feugiat. Placerat lectus
            laoreet maecenas ullamcorper. Elementum feugiat sit consectetur at
            sit.
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <SolutionsCard />
          <SolutionsCard></SolutionsCard>
          <SolutionsCard />
        </div>
      </div>
    </>
  );
}
