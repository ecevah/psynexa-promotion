import React from "react";
import FaqItem from "./faq-item";
import { FAQ_CONTENT } from "@/constant/constant";

export default function Faq(props) {
  return (
    <>
      <div
        className="layout flex flex-col items-center pt-[96px] pb-[96px]"
        data-aos="fade-up"
      >
        <div className="linear-gradient-dark-blue-text text-[50px] font-bold leading-[54px] w-[550px] text-center mb-[96px]">
          Got Questions? We've Got Answers!
        </div>
        <div className="w-[824px] mx-auto flex flex-col">
          {FAQ_CONTENT.map((item, index) => (
            <FaqItem
              title={item.title}
              text={item.text}
              key={`Faq Item ${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
