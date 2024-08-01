import BlogItem from "@/components/homepage/blog-card/blog-item";
import { BLOG_ARRAY } from "@/constant/blogs";
import React from "react";

export default function Blog(props) {
  return (
    <>
      <div className="max-h-[1340px] overflow-y-scroll blog-scroll-item">
        <div className="grid grid-cols-1 breakpoint1025:grid-cols-2 gap-4">
          {BLOG_ARRAY.map((item, index) => (
            <BlogItem
              key={`Blog Card ${index}`}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
