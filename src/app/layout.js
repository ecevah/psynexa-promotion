"use client";
import Header from "@/components/header/header";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/footer/footer";
import Conection from "@/components/conection/conection";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Conection />
        <Footer />
      </body>
    </html>
  );
}
