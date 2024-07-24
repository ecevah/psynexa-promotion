import React from "react";

export default function BlueGradientTitleCard(props) {
  return (
    <>
      <div data-aos="fade-right" className="px-[24px] py-[12px] bg-title-card-gradient-blue rounded-[12px] w-fit text-[20px] font-medium leading-[26px] text-white">
        {props.text}
      </div>
    </>
  );
}
