"use client";

import BlogHeader from "@/components/blog/blog-header/blog-header";
import RecentPost from "@/components/blog/recent-post/recent-post";
import SearchBar from "@/components/blog/search-bar/search-bar";
import TagItem from "@/components/blog/tag-item/tag-item";
import { ARROW_WHITE } from "@/constant/constant";
import Image from "next/image";

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeader />
      <div className="layout py-[96px] flex flex-row justify-between items-start h-full">
        <div className="h-full blog-scroll-item">{children}</div>
        <SearchBar />
      </div>
    </>
  );
}
