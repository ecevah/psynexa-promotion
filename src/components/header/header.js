import { HEADER_LOGO } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import Items from "./items";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div
        className="absolute top-0 right-0 w-full z-[10000]"
        data-aos="fade-down"
      >
        <div className="layout flex flex-row justify-between items-center mt-[60px] mb-[20px]">
          <Image src={HEADER_LOGO} alt="Logo" width={217.28} height={56} />
          <Items />
          <Link href={"/"}>
            <div className="text-center text-[17px] font-medium text-[#0B1215] px-[35px] py-[12px] rounded-[32px] bg-white">
              Let's Talk
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
