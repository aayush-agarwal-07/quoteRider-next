// Import necessary modules
import React from "react";

// Define the About component
const About: React.FC = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Aayush' Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <div>
              Welcome to Quote Rider Blog! This blog was created by Aayush K
              Agarwal as a personal project to share his thoughts and ideas with
              the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component as default
export default About;
