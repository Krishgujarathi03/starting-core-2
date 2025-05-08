import img1 from "../assets/img1.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8 w-full">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-avenir mb-4 leading-tight">
            We work with celebrities to build iconic images.
          </h1>
          <h2 className="text-lg sm:text-xl font-playfair text-gray-200 mb-4">
            We work with labels and brands to craft viral campaigns.
          </h2>
          <p className="text-base sm:text-lg font-lora text-gray-300 mb-4">
            And in our free time, we solve real-world problems —<br />
            <span className="text-gray-400">
              because we can, and because we love it.
            </span>
          </p>

          <div className="flex items-center justify-center md:justify-start space-x-3 mt-6">
            <button className="w-14 h-14 sm:w-16 sm:h-16 bg-transparent border border-white hover:bg-red-600 hover:text-white text-white rounded-full flex items-center justify-center text-xl">
              →
            </button>
            <span className="text-white hover:text-red-600 text-base sm:text-lg">
              See More
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative md:w-1/2 w-full max-w-[500px]">
          <img
            src={img1}
            alt="Design"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
