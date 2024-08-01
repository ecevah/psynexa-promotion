import React from "react";

export default function BlogHeader() {
  return (
    <>
      <div className="blog-inclusive w-full breakpoint769:h-[500px] h-[300px] pt-[217px] pb-[173px]">
        <div className="layout flex flex-col justify-start items-start">
          <div className="text-[72px] font-extrabold leading-[54px] text-white mb-[64px]">
            Blog
          </div>
          <p className="text-[30px] font-medium leading-[22px] text-white">
            Home / <span className="font-light">Blog</span>
          </p>
        </div>
      </div>
    </>
  );
}
