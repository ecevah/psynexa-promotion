import {
  FACEBOOK,
  FOOTER_CONTACT,
  FOOTER_EXPLORER_ITEM,
  FOOTER_ICON,
  FOOTER_LEGAL_ITEM,
  FOOTER_SOCIAL_ICONS,
} from "@/constant/constant";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="layout pt-[96px] pb-[23px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mr-[130px]">
            <Image
              src={FOOTER_ICON}
              alt="logo"
              width={307}
              height={81}
              data-aos="fade-up"
            />
            <p
              className="my-[29px] text-[17px] leading-[26px] font-medium w-[430px]"
              data-aos="fade-up"
            >
              Lorem ipsum dolor sit amet consectetur. Et eu tempor nam congue
              sollicitudin. Congue sem elementum eget facilisis. Ipsum nisl
              fusce arcu scelerisque phasellus. Lorem ipsum dolor sit amet
              consectetur. Et eu tempor nam congue sollicitudin. Congue sem
              elementum eget facilisis. Ipsum nisl fusce arcu scelerisque
              phasellus. <br></br>
              <br></br>Lorem ipsum dolor sit amet consectetur. Et eu tempor nam
              congue sollicitudin. Congue sem elementum eget facilisis. Ipsum
              nisl fusce arcu scelerisque phasellus{" "}
            </p>
            <div className="flex flex-row ">
              <div
                className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#EEF5FF] p-[12px]"
                data-aos="fade-up"
              >
                <Image src={FACEBOOK} alt="facebook" width={10} height={24} />
              </div>
              {FOOTER_SOCIAL_ICONS.map((item, index) => (
                <div
                  key={`Social Icon ${index}`}
                  data-aos="fade-up"
                  className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#EEF5FF] p-[12px] mx-[16px]"
                >
                  <Image src={item.icon} alt="icon" width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col mr-[40px]">
              <div
                className="text-[24px] leading-[26px]  text-[#0B1215] mb-[14px]"
                data-aos="fade-up"
              >
                Explore
              </div>
              {FOOTER_EXPLORER_ITEM.map((item, index) => (
                <div
                  key={`Explore Item ${index}`}
                  data-aos="fade-up"
                  className="font-light text-[17px] leading-[26px] my-[10px]"
                >
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col mr-[40px]">
              <div
                className="text-[24px] leading-[26px]  text-[#0B1215] mb-[14px]"
                data-aos="fade-up"
              >
                Legal
              </div>
              {FOOTER_LEGAL_ITEM.map((item, index) => (
                <div
                  key={`Legal Item ${index}`}
                  data-aos="fade-up"
                  className="font-light text-[17px] leading-[26px] my-[10px]"
                >
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-[300px]">
              <div
                className="text-[24px] leading-[26px]  text-[#0B1215] mb-[14px]"
                data-aos="fade-up"
              >
                Let's Contact
              </div>
              <div
                className="font-light text-[17px] leading-[26px] my-[10px]"
                data-aos="fade-up"
              >
                {FOOTER_CONTACT.address}
              </div>
              <div
                className="font-light text-[17px] leading-[26px] my-[10px]"
                data-aos="fade-up"
              >
                {FOOTER_CONTACT.email}
              </div>
              <div
                className="font-light text-[17px] leading-[26px] my-[10px]"
                data-aos="fade-up"
              >
                {FOOTER_CONTACT.phone}
              </div>
            </div>
          </div>
        </div>
        <p className="text-[17px] leading-[26px] text-center mt-[95px]">
          Copyright | <span className="footer-copyright-blue">Psynexa</span> all
          rights protected 2024
        </p>
      </div>
    </>
  );
}
