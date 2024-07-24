import { ARROW_WHITE, SEARCH_BAR_TAG } from "@/constant/constant";
import React from "react";
import RecentPost from "../recent-post/recent-post";
import TagItem from "../tag-item/tag-item";
import Image from "next/image";
import { BLOG_ARRAY } from "@/constant/blogs";

export default function SearchBar() {
  const itemsToRender =
    BLOG_ARRAY.length > 5 ? BLOG_ARRAY.slice(0, 5) : BLOG_ARRAY;
  return (
    <>
      <div className="w-[400px] h-[1320px] bg-[#F1F1F1] flex flex-col rounded-tl-[12px] rounded-bl-[24px] rounded-tr-[24px] rounded-br-[24px] py-[40px] px-[32px] ml-[24px] pb-auto">
        <div
          className="text-[30px] font-bold leading-[22px] text-black"
          data-aos="fade-left"
        >
          Search
        </div>
        <div className="relative my-[24px]" data-aos="fade-left">
          <input
            type="text"
            className="z-[111] py-[12px] pl-[16px] pr-[56px] placeholder:text-[17px] placeholder:text-[#0B1215] placeholder:opacity-[0.7] placeholder:font-medium w-[340px] rounded-[32px] border-solid border-[0.4px] border-[#0B1215]"
            placeholder="Search Here"
          />
          <Image
            src={ARROW_WHITE}
            width={40}
            height={40}
            className="bg-[#0B1215] rounded-full p-[8px] absolute right-[7px] top-[4px] rotate-[-45deg]"
            alt="arrow"
          />
        </div>
        <div
          className="text-[24px] font-bold leading-[26px] text-black mb-[20px]"
          data-aos="fade-left"
        >
          Recent Posts
        </div>
        <div className="flex flex-col mb-[20px]">
          {itemsToRender.map((item, index) => (
            <RecentPost
              key={`Recent ${index}`}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>
        <div
          className="text-[24px] font-bold leading-[26px] text-black mb-[16px]"
          data-aos="fade-left"
        >
          Tags
        </div>
        <div className="flex flex-col" data-aos="fade-up">
          <div className="flex flex-row">
            <TagItem text={SEARCH_BAR_TAG[0]} />
            <TagItem text={SEARCH_BAR_TAG[1]} />
            <TagItem text={SEARCH_BAR_TAG[2]} />
          </div>
          <div className="flex flex-row my-[14px]">
            <TagItem text={SEARCH_BAR_TAG[3]} />
            <TagItem text={SEARCH_BAR_TAG[4]} />
          </div>
          <div className="flex flex-row">
            <TagItem text={SEARCH_BAR_TAG[5]} />
          </div>
        </div>
      </div>
    </>
  );
}
