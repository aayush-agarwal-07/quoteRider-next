import React from "react";

const Gooey = () => {
  return (
    <div className="w-full relative h-[80vh] border-t-[1px] border-blue-400 overflow-hidden">
      <div className="flex gap-6 py-2 sm:py-28 px-3 max-w-7xl mx-auto mt-5">
        <h1 className="text-7xl font-bold sm:text-8xl mt-[20vh] sm:mt-0 sm:absolute sm:w-[800px]">
          "Encourages expressing
          <br />
          ideas through impactful quotes"
        </h1>
        <div className="relative w-full">
          <div
            className="absolute h-[32vw] w-[32vw] rounded-full bg-gradient-to-tr from-blue-300 to-blue-200
                    blur-[20px] animate-gooey -z-100"
            style={{
              top: "40%",
              left: "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gooey;
