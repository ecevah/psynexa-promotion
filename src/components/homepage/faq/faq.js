import React from "react";
import FaqItem from "./faq-item";
import { FAQ_CONTENT } from "@/constant/constant";

export default function Faq(props) {
  return (
    <>
      <div
        className="layout flex flex-col items-center pt-[96px] pb-[96px]"
        id="faq"
        data-aos="fade-up"
      >
        <div className="linear-gradient-dark-blue-text text-[36px] sm:text-[50px] font-bold leading-[40px] sm:leading-[54px] max-w-[550px] w-[100%] text-center mb-[96px]">
          Got Questions? We've Got Answers!
        </div>
        <div className="max-w-[824px] w-full mx-auto flex flex-col faq-item">
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
