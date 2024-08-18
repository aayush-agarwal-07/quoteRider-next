"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Spread = () => {
  const heading0 = useRef<HTMLDivElement>(null);
  const heading1 = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    // GSAP Animations for headings
    if (heading0.current && heading1.current) {
      gsap.fromTo(
        heading0.current,
        {
          rotation: 6,
          opacity: 0,
          y: () => heading0.current!.clientHeight * 0.5,
        },
        {
          rotation: 0,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heading1.current,
            start: 'center bottom',
          },
        }
      );

      gsap.fromTo(
        heading1.current,
        {
          rotation: 6,
          opacity: 0,
          y: () => heading1.current!.clientHeight * 0.5,
        },
        {
          rotation: 0,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heading1.current,
            start: 'center bottom',
          },
        }
      );
    }

    // Update rotation based on mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Spread the Content */}
      <hr
        className="w-full h-[1px] bg-blue-500 border-none line-animation"
        style={{
          animation: "expandShrink 2s ease-in-out infinite",
        }}
      />
      <div className="w-full h-[30vh] md:h-[90vh] flex flex-col items-center justify-center">
        <div className="flex relative top-0 md:-top-[15vh] h-[4vh] md:h-[5vh] w-[4vw] md:w-[7vw]">
          <svg
            viewBox="0 0 12 12"
            fill="#0D0E13"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-[0.5] md:scale-[0.8] custom-spin"
          >
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
          </svg>

          <p className="hidden text-[1vw] w-[40vw] md:flex items-center justify-center">
            In the media
          </p>
        </div>
        <h2 className="text-center text-[14vw]">
          <div className="leading-2 tracking-tighter">
            <div ref={heading0}>Spread</div>
          </div>
          <div className="leading-0 tracking-tighter">
            <div ref={heading1}>the Content</div>
          </div>
        </h2>
        <p className="mb-4 text-center md:text-[1.66667vw] leading-[5vw] md:leading-[2.22222vw] relative z-20">
          Find out more about my work on either of
          <br />
          these two forms Video/Writing
          <span className="text-blue-500 w-2">.</span>
        </p>
      </div>
      {/* Eye */}
      <div className="w-full h-[40vh] mb-10 mt-0 md:-mt-[12vh] hidden lg:flex flex-col gap-5 items-center justify-center relative transition-all duration-1000">
        <div className="hidden w-[30%] min-h-[20%] sm:flex items-center justify-between cursor-pointer">
          <div className="w-[14vw] h-[14vw] border-2 border-blue-300 bg-white rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] border-2 border-blue-300 bg-white rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Forms */}
      <div className="w-full pb-10">
        <div className="w-[90%] mx-auto md:w-full md:px-20 border-b-[1px] border-blue-400 pb-2 md:pb-10 pt-2 md:pt-0">
          <h1 className="text-3xl md:text-7xl tracking-tight">Find Form</h1>
        </div>
        <div className="px-0 md:px-20">
          <div className="mx-7 flex space-x-[35vw] md:space-x-[42vw] mt-5">
            {" "}
            {/* Added space-x-4 to give spacing between items */}
            <h1 className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-black mr-2"></span>{" "}
              {/* Increased size to w-3 h-3 */}
              Video
            </h1>
            <h1 className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-black mr-2"></span>{" "}
              {/* Increased size to w-3 h-3 */}
              Writing
            </h1>
          </div>

          <div className="cards w-full flex justify-center gap-0 md:gap-2 mt-1 relative">
            <div
              className={`absolute left-[41.2%] md:left-[45%] z-10 text-2xl md:text-5xl transition-all duration-500 text-blue-400 font-bold ${
                hoveredImage === "video"
                  ? "top-[40%] opacity-100"
                  : "top-[46%] opacity-0"
              }`}
            >
              Video
            </div>
            <div
              className={`absolute left-[40%] md:left-[45%] z-10 text-2xl md:text-5xl transition-all duration-500 text-blue-400 font-bold ${
                hoveredImage === "writing"
                  ? "top-[40%] opacity-100"
                  : "top-[46%] opacity-0"
              }`}
            >
              Writing
            </div>
            <div
              className="card container w-1/2 h-[20vh] md:h-[69vh] object-cover relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter("video")}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div
                className="w-full h-full rounded-xl transition-transform duration-500 ease-in-out pointer"
                style={{
                  backgroundImage:
                    "url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform:
                    hoveredImage === "video" ? "scale(0.95)" : "scale(1)", // Apply scaling based on hover state
                }}
              ></div>
            </div>

            <div
              className="card container w-1/2 h-[20vh] md:h-[69vh] object-cover relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter("writing")}
              onMouseLeave={() => handleMouseLeave()}
            >
              <div
                className="w-full h-full rounded-xl transition-transform duration-500 ease-in-out pointer"
                style={{
                  backgroundImage:
                    "url(https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform:
                    hoveredImage === "writing" ? "scale(.95)" : "scale(1)", // Apply scaling based on hover state
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spread;
