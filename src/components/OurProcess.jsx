import React from "react";
import img1 from "../assets/OurProcessSection/ourprocess.png";

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full px-4 sm:px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-avenir mb-4 leading-tight">
            Our Process
          </h1>

          <div className="space-y-8">
            {[
              {
                title: "1. Understand the Brief",
                text: "We decode what’s said, what’s unsaid, and why it matters. This is where the foundation of perception begins.",
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
              <div key={index}>
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-lora text-base sm:text-lg text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 w-full max-w-[500px] mt-10 md:mt-0">
          <img
            src={img1}
            alt="Our Process"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
