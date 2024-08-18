"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, MouseEvent } from "react";

gsap.registerPlugin(ScrollTrigger);

const Top4Videos: React.FC = () => {
  const image1 = useRef<HTMLDivElement>(null);
  const image3 = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (image1.current && image3.current && heading.current) {
      // image 1
      gsap.fromTo(
        image1.current,
        { y: 100 },
        {
          y: -130,
          scrollTrigger: {
            trigger: image1.current,
            scrub: true,
          },
        }
      );

      // image 3
      gsap.fromTo(
        image3.current,
        { y: -50 },
        {
          y: 100,
          scrollTrigger: {
            trigger: image3.current,
            scrub: true,
          },
        }
      );

      // heading scroll trigger opening
      gsap.fromTo(
        heading.current,
        {
          rotation: 6,
          opacity: 0,
          y: () => heading.current!.clientHeight * 0.5,
        },
        {
          rotation: 0,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power4.easeOut",
          scrollTrigger: {
            trigger: heading.current,
            start: "center bottom",
          },
        }
      );
    }
  }, []);

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    const video = event.currentTarget.querySelector<HTMLVideoElement>(".video");
    if (video) video.play();

    const text = event.currentTarget.querySelector<HTMLParagraphElement>("p");
    if (text) {
      gsap.killTweensOf(text);
      gsap.fromTo(
        text,
        { rotation: 10, opacity: 0, y: () => text.clientHeight * 0.5 },
        { rotation: 0, y: 0, opacity: 1, duration: 0.7, ease: "power4.easeOut" }
      );
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const video = event.currentTarget.querySelector<HTMLVideoElement>(".video");
    if (video) video.pause();

    const text = event.currentTarget.querySelector<HTMLParagraphElement>("p");
    if (text) {
      gsap.killTweensOf(text);
      gsap.fromTo(
        text,
        { rotation: 0, opacity: 1, y: 0 },
        {
          rotation: -10,
          y: -text.clientHeight,
          opacity: 0,
          duration: 0.5,
          ease: "power4.easeOut",
        }
      );
    }
  };

  return (
    <section
      className="flex flex-col items-center w-full text-[#0D0E13] relative border-t-[1px] border-blue-400"
      id="work-section"
    >
      <div className="mr-[24vw] mb-4 md:mb-[10vh]">
        <h1
          ref={heading}
          className="text-[7vw] leading-[17vw] transform origin-left"
        >
          &quot;Encourages expressing
          <br />
          ideas through impactful quotes&quot;
        </h1>
      </div>
      <div className="flex flex-wrap w-full relative left-[10%]">
        <div
          id="block-0"
          className="w-[35%] relative ml-[7vw] h-[50.625vw] cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: "url(/assets/work/ali-ali-hero.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            className="video absolute top-0 left-0 w-full h-full object-cover z-10 hidden pointer-events-none"
          >
            <source
              src="https://a.storyblok.com/f/133769/x/4d7b412c76/hover-ali.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-[-1.8vw] overflow-hidden pointer-events-none">
            <p className="text-[0.96vw] font-thin text-gray-500 opacity-0 transform origin-left">
              <span>
                <strong>Ali Ali - </strong>
              </span>
              <span>Unique director&apos;s portfolio</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-auto relative right-[20%]">
          <div className="flex items-center mb-[3vw]">
            <svg
              viewBox="0 0 12 12"
              fill="#0D0E13"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-3 mr-2"
            >
              <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"></path>
            </svg>
            <span className="text-[1.66667vw] font-light">
              Featured Projects
            </span>
          </div>
          <p className="text-[1.66667vw] font-light leading-[2vw]">
            Highlights of cases that we
            <br />
            passionately built with forward-
            <br />
            thinking clients and friends over
            <br />
            the years.
          </p>
          <div
            id="block-1"
            className="relative mt-[15vw] mb-[11.59722vw] h-[32.84722vw] cursor-pointer"
            ref={image1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: "url(/assets/work/ottografie-hero.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <video
              playsInline
              loop
              muted
              disablePictureInPicture
              className="video absolute top-0 left-0 w-full h-full object-cover z-10 hidden pointer-events-none"
            >
              <source
                src="https://a.storyblok.com/f/133769/x/a02005ba43/hover-otto.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute bottom-[-1.8vw] overflow-hidden pointer-events-none">
              <p className="text-[0.96vw] font-thin text-gray-500 opacity-0 transform origin-left">
                <span>
                  <strong>Ottografie - </strong>
                </span>
                <span>Immersive photography portfolio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div
          id="block-2"
          className="relative w-[20%] mt-[15vw] mb-[11.59722vw] h-[22.84722vw] cursor-pointer left-[20%]"
          ref={image1}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage:
              "url(/assets/work/aebele-interiors-hero.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            className="video absolute top-0 left-0 w-full h-full object-cover z-10 hidden pointer-events-none"
          >
            <source
              src="https://a.storyblok.com/f/133769/x/6c4b3b49c3/featured-work-aebele.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-[-1.8vw] overflow-hidden pointer-events-none">
            <p className="text-[0.96vw] font-thin text-gray-500 opacity-0 transform origin-left">
              <span>
                <strong>Aebele Interiors - </strong>
              </span>
              <span>Luxurious design experience</span>
            </p>
          </div>
        </div>
        <div
          id="block-3"
          className="relative w-[35%] h-[41.66667vw] cursor-pointer left-[30%]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: "url(/assets/work/rino-pelle-hero.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <video
            playsInline
            loop
            muted
            disablePictureInPicture
            className="video absolute top-0 left-0 w-full h-full object-cover z-10 hidden pointer-events-none"
          >
            <source
              src="https://a.storyblok.com/f/133769/x/9a7360f739/featured-work-rino.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-[-1.8vw] overflow-hidden pointer-events-none">
            <p className="text-[0.96vw] font-thin text-gray-500 opacity-0 transform origin-left">
              <span>
                <strong>Rino Pelle - </strong>
              </span>
              <span>Elegant fashion statement</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top4Videos;
