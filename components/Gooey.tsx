"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Gooey: React.FC = () => {
  // Create a ref to be used for the flag animation and text targeting
  const targetRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      gsap.to("#flag", {
        x: event.clientX - 25,
        y: event.clientY + 62,
        duration: 0.5, // Smooth movement
      });
    };

    const handleMouseEnter = () => {
      gsap.to("#flag", {
        opacity: 1,
        duration: 0.5, // Fade-in effect
      });
    };

    const handleMouseLeave = () => {
      gsap.to("#flag", {
        opacity: 0,
        duration: 0.5, // Fade-out effect
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    const heroElement = targetRef.current;
    heroElement?.addEventListener("mouseenter", handleMouseEnter);
    heroElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      heroElement?.removeEventListener("mouseenter", handleMouseEnter);
      heroElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full relative h-[40vh] md:h-[90vh] overflow-hidden mt-0 md:-mt-48">
      <div className="flex md:gap-6 py-2 sm:py-28 px-3 mx-[4vh] md:mx-[15vh] mt-5">
        <h1
          ref={targetRef}
          className="text-4xl md:text-9xl leading-none sm:leading-4 font-medium md:font-semibold tracking-tight md:mt-[20vh] sm:mt-0 sm:absolute pointer min-w-20"
        >
          &quot;Encourages <br /> expressing
          <br />
          <span className="text-blue-500 relative z-10">
            ideas through
          </span>{" "}
          <br />
          impactful quotes&quot;
        </h1>
        <div className="relative w-full">
          <div
            className="absolute h-[64vw] w-[64vw] md:h-[32vw] md:w-[32vw] rounded-full bg-gradient-to-tr from-blue-300 to-blue-200
                    blur-[20px] animate-gooey -z-100"
            style={{
              top: "40%",
              left: "60%",
            }}
          />
        </div>
      </div>
      <img
        id="flag"
        src="/assets/logopotrait.png"
        alt="Flag"
        className="h-[25vw] absolute top-0 left-0 opacity-0 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl"
      />
    </div>
  );
};

export default Gooey;
