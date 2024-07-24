import { ABOUT_ICON, DEVICE_1, DEVICE_2 } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import BlueGradientTitleCard from "../partner-component/blue-gradient-title-card";
import { useIntersectionObserver } from "@/service/hook/useIntersectionObserver";
import "@/styles/about-us.css";

export default function AboutUs() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0 });
  return (
    <>
      <div className="relative layout ">
        <div className="flex flex-col pt-[128px] pb-[160px]">
          <BlueGradientTitleCard text="About Us" />
          <p
            className="text-[50px] font-bold leading-[54px] text-black w-[400px] mt-[20px] mb-[32px]"
            data-aos="fade-right"
          >
            Push the Limits, Realize Dreams.
          </p>
          <div className="flex flex-row items-center" ref={ref}>
            <Image
              src={ABOUT_ICON}
              alt="icon"
              height={142}
              width={14}
              data-aos="fade-right"
            />
            <div
              className="text-[17px] font-semibold leading-[26px] text-black w-[620px] ml-[10px] "
              data-aos="fade-right"
            >
              Lorem ipsum dolor sit amet consectetur. Diam amet rhoncus quisque
              sit. Ultricies facilisi pharetra eu elit feugiat. Placerat lectus
              laoreet maecenas ullamcorper. Elementum feugiat sit consectetur at
              sit. In aliquam in ipsum rhoncus pharetra elit in. Elit ut
              volutpat nequelaoreet in praesent eget. Viverra arcu neque etiam
              nascetur venenatis consequat et. Augue sed non odio rutrum.
              Egestas hac maecenas augue iaculis etiam.
            </div>
          </div>
          <div
            className="text-[17px] font-medium leading-[26px] text-black w-[620px] mt-[20px]"
            data-aos="fade-right"
          >
            Lorem ipsum dolor sit amet consectetur. Diam amet rhoncus quisque
            sit. Ultricies facilisi pharetra eu elit feugiat. Placerat lectus
            laoreet maecenas ullamcorper. Elementum feugiat sit consectetur at
            sit. In aliquam in ipsum rhoncus pharetra elit in. Elit ut volutpat
            neque rhoncus laoreet in praesent eget. Viverra arcu neque etiam
            nascetur venenatis consequat et. Augue sed non odio rutrum. Egestas
            hac maecenas augue iaculis etiam.
          </div>
        </div>
        <Image
          src={DEVICE_1}
          width={1100}
          height={600}
          alt="device 1"
          className={`device-1 ${isVisible ? "animate" : ""}`}
        />
        <Image
          src={DEVICE_2}
          width={900}
          height={500}
          alt="device 2"
          className={`device-2 ${isVisible ? "animate" : ""}`}
        />
      </div>
    </>
  );
}
