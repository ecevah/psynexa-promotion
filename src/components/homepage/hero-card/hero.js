"use client";
import { ARROW_BLACK, ARROW_WHITE, ROBOT } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import "@/styles/hero-card.css";

export default function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ripples = document.querySelectorAll(".none");
      ripples.forEach((ripple) => {
        ripple.style.display = "none";
      });
    }, 3100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div
        className="relative bg-radial-gradient-blue h-[100vh] w-full flex justify-center items-center z-[10] overflow-hidden"
        data-aos="fade-up"
      >
        <Image src={ROBOT} width={781} height={731} className="robot" />
        <div className="ripple-container z-[0] bg-white">
          <div className="ripple none"></div>
          <div className="ripple none"></div>
          <div className="ripple none"></div>
        </div>
        <div className="absolute z-[1] radial-gradient-white w-[500px] h-[500px] rounded-full"></div>
        <div className="flex flex-col justify-center items-center z-[10] layout hero-content">
          <p className="text-white text-center text-[58px] font-black leading-[76px] w-[800px] mb-[26px] hero-content-title">
            A BRIDGE THAT TOUCHES<br></br>YOUR MIND AND OPENS <br></br>TO THE
            FUTURE : PSYNEXA
          </p>
          <p className="text-white text-[14px] w-[630px] text-center font-normal leading-[20px] hero-content-text">
            Lorem ipsum dolor sit amet consectetur. Maecenas justo dignissim
            enim arcu neque at lorem cursus. Nibh faucibus sit vivamus ultrices
            quis scelerisque proin feugiat sollicitudin. Quis arcu sit in nulla
            id ut. Viverra integer nibh ac tristique non massa. Cras condimentum
            vitae fermentum velit.
          </p>
          <div className="flex flex-row justify-center items-center mt-[48px] hero-content-button">
            <Link href={"/"} className="mr-[20px]">
              <div className="flex flex-row justify-center items-center px-[24px] rounded-full bg-black h-[50px]">
                <div className="text-[20px] font-semibold leading-[26px] text-white mr-[10px]">
                  Learn More
                </div>
                <Image
                  src={ARROW_BLACK}
                  alt="Arrow"
                  width={30}
                  height={30}
                  className="p-[4px] rounded-full bg-white rotate-[-45deg]"
                />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="flex flex-row justify-center items-center px-[24px] rounded-full h-[50px] border-white border-[1px] border-solid">
                <div className="text-[20px] font-semibold leading-[26px] text-white mr-[10px]">
                  Watch Video
                </div>
                <Image src={ARROW_WHITE} alt="Arrow" width={24} height={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}