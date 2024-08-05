import { ARROW_WHITE } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import "@/styles/blog-item.css";
import Link from "next/link";

export default function BlogItem(props) {
  return (
    <>
      <Link href={"/blog/12"}>
        <div
          className="w-[400px] h-[413px] relative rounded-tl-[24px] rounded-tr-[12px] rounded-bl-[24px] rounded-br-[24px] flex flex-col justify-end items-start overflow-hidden px-[20px] py-[17px] mb-[20px] blog-card-container"
          style={{
            background: `url('${props.image}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={ARROW_WHITE}
            width={27}
            height={27}
            alt="Arrow"
            className="rotate-[-45deg] absolute top-[7px] right-[7px] max-w-[27px] max-h-[27px] z-[3] "
          />
          <div className="w-[80px] h-[80px] bg-[#0B1215] absolute rounded-full -top-[30px] -right-[30px] z-[2] blog-card-container-hover" />
          <div className="text-[24px] leading-[28px] font-normal text-white w-[330px]">
            {props.title}
          </div>
          <div className="text-[17px] font-light leading-[26px] text-white">
            {props.date}
          </div>
        </div>
      </Link>
    </>
  );
}
