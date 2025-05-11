
import ctaImg from "../assets/cta/cta-section.png";

const Cta = () => {
  return (
    <div
      id="get-started"
      className=" xs:w-[90%] xs:m-auto xs:mt-12 md:min-h-screen bg-[#1a1a1a] text-white w-full md:p-4"
    >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
          {/* Left Column: Image with blur effect */}
          <div className="md:w-1/2 w-full max-w-[500px] relative md:mt-10 sm:mt-0">
            {/* Blurred background image */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
              <img
                src={ctaImg}
                alt="blur-bg"
                className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.6] blur-3xl rounded-lg"
              />
            </div>

            {/* Foreground image */}
            <img
              src={ctaImg}
              alt="CTA Img"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
            />
          </div>

          {/* Right Column: Content */}
          <div className="sm:w-1/2 xs:text-center ">
            <h1 className="animate-cta-text text-4xl xs:text-[2.5rem] xs:font-[700] md:text-7xl font-avenir mb-4 leading-tight text-center sm:text-left text-white">
              Shape What They See
            </h1>

            <h2 className="animate-cta-text text-lg xs:text-[1.25rem] font-playfair text-white text-center sm:text-left mb-4">
              Let's build something worth remembering.
            </h2>

            <p className="animate-cta-text text-base xs:text-4 font-lora text-white leading-relaxed text-justify px-4 sm:px-0 mb-6">
              Whether you're building an image, launching a movement, or solving
              a perception problem — we're here to think it through with you.
            </p>

            <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 shadow-lg">
              Start a Conversation
            </button>
          </div>
        </div>
    </div>
  );
};

export default Cta;
