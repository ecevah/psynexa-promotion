"use client";

import AboutUs from "@/components/homepage/about-us/about-us";
import Hero from "@/components/homepage/hero-card/hero";
import OurSolutions from "@/components/homepage/our-solutions/our-solutions";
import VideoCard from "@/components/homepage/video-card/video-card";
import Faq from "@/components/homepage/faq/faq";
import Blog from "@/components/homepage/blog-card/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <div className="w-full linear-gradient-bg">
        <OurSolutions />
        <VideoCard />
      </div>
      <Blog />
      <Faq />
    </>
  );
}
