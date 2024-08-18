import React from "react";
import Contact from "./Contact";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon, MailPlus } from "lucide-react";
import Mail from "./Mail";
const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-[90vh] md:h-[80vh] bg-black">
      <div className="absolute w-[100%] h-[30%] md:w-[60%] md:h-[60%] md:top-0 md:right-0 -z-1 bg-gradient-radial from-transparent to-[#070707] via-[#070707]">
        <video
          src="/assets/footer-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      </div>
      <Contact />
      <Mail />
      <div className="flex items-end justify-end gap-3 lg:gap-6 flex-wrap px-2 md:px-[7vh] py-2 h-[10vh] md:h-[17vh] mt-[20vh]">
        <a
          href="https://www.instagram.com/aayush.agarwal.07/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/aayushkagarwal07/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
        </a>
        <a
          href="https://https://x.com/aayush_0701"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
        </a>
        <a
          href="mailto:aayushagarwal297@gmail.com?body=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 pointer" />
        </a>
        <hr className="w-full h-[2px] bg-black border-none" />
        <p className="relative md:right-[91.5%] md:-mt-[10vh]">© QuoteRider</p>
      </div>
    </footer>
  );
};

export default Footer;
