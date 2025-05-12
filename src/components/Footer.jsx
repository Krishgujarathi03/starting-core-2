import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 py-12 border-t border-orange-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side - Name and Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Aakashraj Kusum Ambre
          </h1>
          <p className="text-lg text-gray-300">Founder & CEO</p>
        </div>

        {/* Middle - Contact Info */}
        <div className="flex flex-col sm:flex-row items-start gap-8 border-l-2 border-orange-500 pl-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-orange-500" />
              <span>9819334567</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <a
                href="mailto:aakashraj@bonbern.com"
                className="hover:underline text-gray-300"
              >
                aakashraj@bonbern.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="text-orange-500" />
              <a
                href="https://www.instagram.com/aakashraj.ambre"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300"
              >
                aakashraj.ambre
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom - Website Link */}
      <div className="text-center text-lg mt-12">
        <a
          href="https://www.bonbern.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:underline"
        >
          www.bonbern.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
