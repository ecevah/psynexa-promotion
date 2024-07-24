import Link from "next/link";
import React from "react";

export default function Item(props) {
  return (
    <>
      <Link href={props.link}>
        <div className="cursor-pointer text-[17px] font-semibold leading-[26px] text-white mx-[16px]">
          {props.text}
        </div>
      </Link>
    </>
  );
}
