"use client";
import {
  CLOSE,
  HAMBURGER,
  HEADER_ITEMS,
  HEADER_LOGO,
} from "@/constant/constant";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Items from "./items";
import Link from "next/link";
import Item from "./item";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setIsOpen(false);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="absolute top-0 right-0 w-full z-[10000]"
        data-aos="fade-down"
      >
        <div className="layout flex flex-row justify-between items-center mt-[60px] mb-[20px]">
          <Image
            src={HEADER_LOGO}
            alt="Logo"
            width={217.28}
            height={56}
            className="breakpoint769:scale-100 scale-75"
          />
          <Items />
          <Link href={"/"} className="hidden breakpoint1025:block">
            <div className="text-center text-[17px] font-medium text-[#0B1215] px-[35px] py-[12px] rounded-[32px] bg-white">
              Let's Talk
            </div>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer w-[32px] h-[32px] rounded-full breakpoint1025:hidden flex justify-center items-center bg-[#f5f5f73f] p-[7px] breakpoint769:mr-0 mr-[20px]"
          >
            <Image
              src={isOpen ? CLOSE : HAMBURGER}
              alt="hamburger"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-radial-gradient-blue flex flex-col items-center justify-center z-[9999]">
          {HEADER_ITEMS.map((item, index) => (
            <div onClick={() => handleScroll(item.link)} key={`Items ${index}`}>
              <div className="cursor-pointer text-[17px] font-semibold leading-[26px] text-white mx-[16px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
