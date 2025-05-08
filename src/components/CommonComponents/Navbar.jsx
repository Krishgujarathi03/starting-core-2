import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // or any icon library

import Logo from "../../assets/logo.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);

   return (
    <nav className="relative border-b border-gray-500 bg-[#1a1a1a]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="brand logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="relative">
            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Nav Links */}
            <div
              className={`
                xs:left-[-19.3rem] xs:top-[4rem] xs:w-[22rem]
                lg:ml-[14rem] lg:flex lg:items-center lg:justify-end xl:w-[57rem]
                2xl:w-[65rem]
                ${open ? "block" : "hidden"}
                lg:static absolute left-0 right-0 top-full
                bg-[#1a1a1a] z-50
              `}
            >
              <ul className=" text-center flex flex-col lg:flex-row lg:gap-12 gap-0 lg:w-full w-auto text-sm">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Our Process", "/process"],
                  ["Who We Work With", "/clients"],
                  ["Founder", "/founder"],
                  ["Get Started", "/start"],
                ].map(([label, to]) => (
                  <li
                    key={label}
                    className="lg:bg-transparent bg-gray-800 hover:bg-gray-700"
                  >
                    <Link
                      to={to}
                      className="block px-4 py-3 text-white hover:text-red-600"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

