import img1 from "../assets/img1.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8 w-full">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl font-avenir mb-4 leading-tight">
            We work with celebrities to build iconic images.
          </h1>
          <h2 className="text-lg sm:text-xl font-playfair text-white mb-4">
            We work with labels and brands to craft viral campaigns.
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-lora text-white mb-4 font-bold">
            And in our free time, we solve real-world problems
            <br />
            <span className="text-white">
              because we can, and because we love it.
            </span>
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 w-full max-w-[500px]">
          <img
            src={img1}
            alt="HeroImg"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
