import React from "react";
import img1 from "../assets/OurProcessSection/ourprocess.png";

const OurProcess = () => {
  return (
    <div
      id="our-process"
      className=" bg-[#1a1a1a] text-white w-full
        xs:w-[90%] xs:m-auto xs:mt-[3rem] 
        md:min-h-screen md:px-10 
        xl:px-0 xl:mt-[4rem]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column: Content */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-4xl font-avenir mb-4 leading-tight
            xs:text-[2.5rem] xs:font-[700] 
            md:text-6xl 
            xl:text-[2.5rem]  "
          >
            Our Process
          </h1>

          <div className="xs:w-[82%] xs:m-auto
            xl:ms-0 ">
            {[
              {
                title: "1. Understand the Brief",
                text: "We decode what's said, what's unsaid, and why it matters. This is where the foundation of perception begins.",
              },
              {
                title: "2. Decode Behavior",
                text: "We dive deep into psychology, audience patterns, and cultural signals — so that what we create is not just creative, but correctly wired.",
              },
              {
                title: "3. Design the Narrative",
                text: "Every message is engineered to not just be seen, but felt and remembered.",
              },
              {
                title: "4. Develop Communication Assets",
                text: "From content to campaigns, we build assets that are platform-fit — digital, physical, or phygital.",
              },
              {
                title: "5. Adapt & Amplify",
                text: "We observe how the world reacts, learn from signals, and evolve the message accordingly.",
              },
              {
                title: "6. Reflect & Reinvent",
                text: "We circle back, learn what shifted perception, and explore new opportunities.",
              },
            ].map((item, index) => (
              <div key={index} className="xs:mb-8" >
                <h3 className="font-playfair text-xl xs:text-[1.2rem] xs:font-[400] xs:leading-[3.4rem] text-white mb-2 ">
                  {item.title}
                </h3>
                <p className="font-lora text-base text-white 
                  xs:text-[1rem] 
                  xl:text-[1.125rem]  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image with blur effect */}
        <div className=" xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative">
          {/* Blurred background image */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.1] blur-3xl rounded-lg"
            />
          </div>

          {/* Foreground image */}
          <img
            src={img1}
            alt="Our Process"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
