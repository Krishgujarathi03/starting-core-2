
import img1 from "../assets/img1.png";
import Navbar from "./CommonComponents/Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-avenir mb-1 leading-tight">
              We work with celebrities to build iconic images.
            </h1>
            <h2 className="text-xl font-playfair text-gray-200 mb-3">
              We work with labels and brands to craft viral campaigns.
            </h2>
            <p className="text-lg font-lora text-gray-300">
              And in our free time, we solve real-world problems —
              <br />
              <span className="text-gray-400">
                because we can, and because we love it.
              </span>
            </p>
          </div>

          <div className="relative md:w-1/2 xs:h-[40vh] lg:h-auto mt-8 md:mt-0">
            <img
              src={img1}
              alt="Design"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
