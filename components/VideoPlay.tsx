"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const VideoPlay: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoCursorRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const videoCursor = videoCursorRef.current;
    const video = videoRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (videoCursor) {
        const x =
          event.clientX -
          (videoContainer ? videoContainer.getBoundingClientRect().left : 0) - 75;
        const y =
          event.clientY -
          (videoContainer ? videoContainer.getBoundingClientRect().top : 0) - 75;

        // Use GSAP to animate cursor position
        gsap.to(videoCursor, {
          left: `${x}px`,
          top: `${y}px`,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = () => {
      videoContainer?.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      gsap.to(videoCursor, {
        left: "70%",
        top: "-10%",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleClick = () => {
      if (video) {
        if (video.paused) {
          video.play();
          video.style.opacity = "1";
          videoCursor!.innerHTML = '<i class="ri-pause-mini-fill"></i>';
          gsap.to(videoCursor, {
            scale: 0.5,
          });
          console.log("Video is playing");
        } else {
          video.pause();
          video.style.opacity = "0";
          videoCursor!.innerHTML = '<i class="ri-play-mini-fill"></i>';
          gsap.to(videoCursor, {
            scale: 1,
          });
          console.log("Video is paused");
        }
        setIsPlaying(!isPlaying);
      } else {
        console.log("Video element not found");
      }
    };

    videoContainer?.addEventListener("mouseenter", handleMouseEnter);
    videoContainer?.addEventListener("mouseleave", handleMouseLeave);
    videoContainer?.addEventListener("click", handleClick);

    return () => {
      videoContainer?.removeEventListener("mouseenter", handleMouseEnter);
      videoContainer?.removeEventListener("mouseleave", handleMouseLeave);
      videoContainer?.removeEventListener("mousemove", handleMouseMove);
      videoContainer?.removeEventListener("click", handleClick);
    };
  }, [isPlaying]);

  return (
    <div
      ref={videoContainerRef}
      className="hidden md:block relative h-[66vh] w-[71vw] left-[28%] bg-red-500 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://obys.agency/wp-content/uploads/2022/11/Showreel-2022-preview-1.jpg)",
      }}
    >
      <div
        ref={videoCursorRef}
        className="absolute -top-[10%] left-[70%] flex items-center justify-center bg-blue-300 h-[9vw] w-[9vw] rounded-full z-50 cursor-pointer"
      >
        <i className="ri-play-mini-fill text-[2vw]"></i>
      </div>
      <video
        ref={videoRef}
        loop
        src="https://obys.agency/wp-content/uploads/2022/11/Obys-Showreel-2022.mp4"
        className="h-full w-full object-cover opacity-0"
        style={{ display: "block" }} // Ensure the video is visible
      ></video>
    </div>
  );
};

export default VideoPlay;
