import Link from "next/link";
import React from "react";

export default function Item(props) {
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div onClick={() => handleScroll(props.link)}>
        <div className="cursor-pointer text-[17px] font-semibold leading-[26px] text-white mx-[16px]">
          {props.text}
        </div>
      </div>
    </>
  );
}
