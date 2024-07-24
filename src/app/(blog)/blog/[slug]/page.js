import Excerpt from "@/components/blog/blog-content/excerpt";
import { Paragraph } from "@/components/blog/blog-content/paragraph";
import TagItem from "@/components/blog/tag-item/tag-item";
import {
  BLOG_CONTENT_IMG,
  FACEBOOK,
  FOOTER_SOCIAL_ICONS,
} from "@/constant/constant";
import Image from "next/image";
import React from "react";

export default function BlogDetailPage() {
  return (
    <>
      <div className="flex flex-col">
        <Image
          src={BLOG_CONTENT_IMG}
          width={823}
          height={540}
          className="rounded-l-[24px] rounded-r-[12px]"
        />
        <p className="text-[17px] font-medium leading-[26px] text-[#0B1215] mt-[20px]">
          Writer:
          <span className="text-black ml-[12px] mr-[32px]">Rıdvan Güzel</span>
          Last Update:
          <span className="text-black ml-[12px] mr-[32px]">June 22, 2024</span>
        </p>
        <Paragraph text="Lorem ipsum dolor sit amet consectetur. Ullamcorper ut velit dictum bibendum porta nunc lectus neque eros. Amet eu vestibulum egestas tincidunt turpis. Sit et scelerisque augue velit euismod neque habitant. Augue amet at volutpat fames et volutpat aliquam lobortis. Elit amet morbi est sodales auctor. " />
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ipsum vel ipsum, et mollis nunc. Sed bibendum, enim vel fermentum sagittis, justo mauris consectetur lectus, non consectetur nisi urna sed arcu. Sed fringilla, felis vel consectetur consectetur, justo velit sagittis ex, a consectetur nisi urna sed arcu. Sed fringilla, felis vel consectetur consectetur, justo velit sagittis ex, a consectetur nisi urna" />
        <Excerpt text="Our thoughts shape our lives." author="William James." />
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ipsum vel ipsum, et mollis nunc. Sed bibendum, enim vel fermentum sagittis, justo mauris consectetur lectus, non consectetur nisi urna sed arcu. Sed fringilla, felis vel consectetur consectetur, justo velit sagittis ex, a consectetur nisi urna sed arcu. Sed fringilla, felis vel consectetur consectetur, justo velit sagittis ex, a consectetur nisi urna" />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center mt-[16px]">
            <div className="text-[17px] font-medium leading-[26px] text-black mr-[16px]">
              Tags:
            </div>
            <TagItem text="AI" />
            <TagItem text="Psynexa" />
            <TagItem text="Tech" />
          </div>
          <div className="flex flex-row items-center mt-[16px]">
            <div className="text-[17px] font-medium leading-[26px] text-black mr-[6px] ">
              Shere:
            </div>
            <div className="flex flex-row ">
              <div
                className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#EEF5FF] p-[12px] mx-[10px]"
                data-aos="fade-up"
              >
                <Image src={FACEBOOK} alt="facebook" width={10} height={24} />
              </div>
              {FOOTER_SOCIAL_ICONS.map((item, index) => (
                <div
                  key={`Social Icon ${index}`}
                  data-aos="fade-up"
                  className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#EEF5FF] p-[12px] mx-[10px]"
                >
                  <Image src={item.icon} alt="icon" width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
