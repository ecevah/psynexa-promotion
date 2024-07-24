import React from "react";

export default function Excerpt(props) {
  return (
    <>
      <div className="w-full h-fit px-[64px] py-[32px] flex flex-col bg-[#0A6EBD]">
        <div className="text-[20px] font-bold leading-[26px] text-white">{`"${props.text}"`}</div>
        <div className="w-fit ml-auto text-[20px] font-bold leading-[26px] text-white mt-[4px]">{`-${props.author}`}</div>
      </div>
    </>
  );
}
