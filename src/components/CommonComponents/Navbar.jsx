import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional: for icons
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-xl">
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>
          <Link to="/" className="hover:text-red-600">
            About Us
          </Link>
          <Link to="/" className="hover:text-red-600">
            Our Process
          </Link>
          <Link to="/" className="hover:text-red-600">
            Who We Work With
          </Link>
          <Link to="/" className="hover:text-red-600">
            Founder
          </Link>
          <Link to="/" className="hover:text-red-600">
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
        <div className="md:hidden flex flex-col gap-4 mt-4 text-lg px-4">
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
    </div>
  );
};

export default Navbar;
