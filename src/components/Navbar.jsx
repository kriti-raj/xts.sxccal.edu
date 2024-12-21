/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ Logo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for managing mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  return (
    <div className="relative w-full flex items-center justify-between px-8 py-2 bg-maroon-900 z-50">
      <div className="flex items-center">
        <img className="h-20 w-20" src={Logo} alt="Logo" />
      </div>
      <h1 className="font-bold text-2xl sm:text-3xl text-white text-left flex-1 drop-shadow-md" style={{ fontFamily: 'Georgia, serif', color: "white" }}>
        X<span style={{fontSize: "1.5rem", fontWeight: "bold"}}>AVERIAN</span> T<span style={{fontSize: "1.5rem", fontWeight: "bold"}}>HEATRICAL</span> S<span style={{fontSize: "1.5rem", fontWeight: "bold"}}>OCIETY</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-400 transition">Home</Link>
        <Link to="/events" className="text-white hover:text-gray-400 transition">Events</Link>
        <Link to="/registrations" className="text-white hover:text-gray-400 transition">Registrations</Link>
        <Link to="/achievements" className="text-white hover:text-gray-400 transition">Achievements</Link>
        <Link to="/contact-us" className="text-white hover:text-gray-400 transition">Contact Us</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 text-white md:hidden">
          <Link to="/" onClick={toggleMobileMenu} className="text-white hover:text-gray-400 transition">Home</Link>
          <Link to="/events" onClick={toggleMobileMenu} className="text-white hover:text-gray-400 transition">Events</Link>
          <Link to="/registrations" onClick={toggleMobileMenu} className="text-white hover:text-gray-400 transition">Registrations</Link>
          <Link to="/achievements" onClick={toggleMobileMenu} className="text-white hover:text-gray-400 transition">Achievements</Link>
          <Link to="/contact-us" onClick={toggleMobileMenu} className="text-white hover:text-gray-400 transition">Contact Us</Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
