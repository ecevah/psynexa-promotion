import React from "react";

export const Paragraph = (props) => {
  return (
    <>
      <p className="text-[17px] font-medium leading-[26px] text-black my-[16px]">
        {props.text}
      </p>
    </>
  );
};
