
import img1 from "../assets/OurClients/ourClients.png";

const partners = [
  {
    title: "Artists",
    items: ["Badshah", "Sunidhi Chauhan", "Jasleen Royal", "Tanishk Bagchi"],
  },
  {
    title: "Labels",
    items: ["UMG", "Saregama", "T-Series", "Artiste First"],
  },
  {
    title: "Brands",
    items: ["SonyLiv", "Discovery", "Hindustan Times", "Nobel Chemist"],
  },
];

const OurClients = () => {
  return (
    <div
      id="who-we-work-with"
      className="xs:w-[90%] xs:m-auto xs:mt-[3rem] min-h-screen bg-[#1a1a1a] text-white w-full "
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column: Image with blur effect */}
        <div className=" xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative">
          {/* Blurred background image */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.4] blur-3xl rounded-lg"
            />
          </div>

          {/* Foreground image */}
          <img
            src={img1}
            alt="Our Clients"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Right Column: Content */}
        <div className=" xs:w-[88%] md:w-1/2 2xl:pe-[2rem] xl:mt-10 md:mt-0">
          <h1 className="text-4xl xs:text-[2.5rem] xs:text-center xs:font-[700] xs:mb-4 md:text-7xl font-avenir mb-1 leading-tight text-left text-white">
            Who We Work With
          </h1>

          <h2 className="xs:text-[1.25rem] xs:font-[400] xs:mb-[0.875rem] font-playfair text-white text-left mb-4">
            The best partnerships are built on trust — and results.
          </h2>

          <p className="text-lg font-lora text-white leading-relaxed text-justify xs:text-[1rem] xs:mb-4 mb-8 ">
            Over the years, we've collaborated with some of the most influential
            names across music, media, and brands.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 xs:text-center md:grid-cols-3 gap-6">
            {partners.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-semibold text-white border-b-2 border-gray-500 inline-block pb-2 mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-1 text-white text-base">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
