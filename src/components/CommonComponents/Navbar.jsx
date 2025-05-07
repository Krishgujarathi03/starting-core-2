import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-xl">
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-600">
            About Us
          </Link>
          <Link to="/our-process" className="hover:text-red-600">
            Our Process
          </Link>
          <Link to="/our-clients" className="hover:text-red-600">
            Who We Work With
          </Link>
          <Link to="/founder" className="hover:text-red-600">
            Founder
          </Link>
          <Link to="/build-your-legacy" className="hover:text-red-600">
            Get Started
          </Link>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-lg px-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            About Us
          </Link>
          <Link
            to="/our-process"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Our Process
          </Link>
          <Link
            to="/our-clients"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Who We Work With
          </Link>
          <Link
            to="/founder"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Founder
          </Link>
          <Link
            to="/build-your-legacy"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
