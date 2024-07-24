import React from "react";

export default function RecentPost(props) {
  return (
    <>
      <div
        className="flex flex-col pb-[28px] mb-[24px] border-b-solid border-b-[1px] border-b-[#0081C9]"
        data-aos="fade-up"
      >
        <div className="flex flex-row justify-start items-center mb-[8px]">
          <div className="w-[4px] h-[4px] rounded-full bg-[#0A6EBD] mr-[8px]" />
          <div className="text-[17px] leading-[26px] font-light text-black">
            {props.date}
          </div>
        </div>
        <div className="text-[20px] font-medium leading-[26px] text-black w-[300px]">
          {props.title}
        </div>
      </div>
    </>
  );
}
