"use client";

import { ARROW_UP } from "@/constant/constant";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-7 right-7 z-[13000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-[30px] h-[30px] rounded-lg border-solid border-[1px] border-blue-900 bg-white flex justify-center items-center"
        >
          <Image src={ARROW_UP} width={15} height={15} alt="arrow-up" />
        </button>
      )}
    </div>
  );
};

export default GoToTop;
