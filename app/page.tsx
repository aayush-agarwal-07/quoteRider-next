import Footer from "@/components/Footer";
import Gooey from "@/components/Gooey";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Spread from "@/components/Spread";
import Top4Videos from "@/components/Top4Videos";
import VideoPlay from "@/components/VideoPlay";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full overflow-x-hidden">
      <Header />
      <VideoPlay />
      <Marquee />
      <Top4Videos />
      <Gooey />
      <Spread />
      <Footer />
    </main>
  );
};

export default page;
