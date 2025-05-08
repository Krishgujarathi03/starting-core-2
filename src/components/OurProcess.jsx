import React from "react";
import img1 from "../assets/Our Process section/ourprocess.png";

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8 w-full">
        {/* Left Column: Content */}
        <div className="md:w-1/2 2xl:pe-[2rem]">
          <h1 className="text-7xl font-avenir mb-1 leading-tight text-center text-white">
            Our Process
          </h1>

          <h2 className="text-xl font-playfair text-white text-center mb-4">
            Every idea we shape is rooted in insight — not instinct.
          </h2>

          <p className="text-lg font-lora text-white leading-relaxed text-justify px-2 md:px-0 mb-8">
            Whether we’re building celebrity personas, launching brand
            movements, or solving public challenges — here’s how we work:
          </p>

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
                text: "From content to campaigns, we build assets that are platform-fit — digital, physical, or phygital. We don’t just follow trends. We often start them.",
              },
              {
                title: "5. Adapt & Amplify",
                text: "We observe how the world reacts, learn from signals, and evolve the message accordingly.",
              },
              {
                title: "6. Reflect & Reinvent",
                text: "We circle back, learn what shifted perception, and explore new opportunities. What we build today should make tomorrow smarter.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="font-lora text-lg text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative md:w-1/2 mt-10 md:mt-0">
          <img
            src={img1}
            alt="Our Process"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
