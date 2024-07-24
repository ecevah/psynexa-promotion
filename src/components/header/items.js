import { HEADER_ITEMS } from "@/constant/constant";
import React from "react";
import Item from "./item";

export default function Items() {
  return (
    <>
      <div className="flex flex-row justify-center w-fit pt-[16px] pb-[14px] px-[24px] bg-[rgb(245,245,247,0.10)] border-[rgb(245,245,247,0.25)] border-solid border-[0.5px] rounded-[24px]">
        {HEADER_ITEMS.map((item, index) => (
          <Item
            key={`Header Item ${index}`}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
}
