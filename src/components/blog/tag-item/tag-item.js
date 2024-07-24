import React from "react";

export default function TagItem(props) {
  return (
    <>
      <div className="px-[16px] py-[4px] text-[#0A6EBD] rounded-full text-[17px] leading-[26px] font-medium border-solid border-[0.5px] border-[#0A6EBD] mr-[16px]">
        {props.text}
      </div>
    </>
  );
}
