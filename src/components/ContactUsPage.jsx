import { BgInternal, srijonee, archisman, Logo } from "./Assets";
import Navbar from "./Navbar.jsx";

const ContactUsPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar Logo={Logo} />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-4 sm:py-8 mt-16">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Contact us
        </h1>

        {/* Contacts Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* First Contact */}
          <div className="bg-black bg-opacity-60 rounded-lg p-4 sm:p-6 max-w-xs w-full text-center">
            <img
              src={srijonee}
              alt="Srijonee Chowdhury"
              className="w-24 h-24 sm:w-full sm:h-auto rounded-full sm:rounded-lg mb-4 mx-auto"
            />
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
              Srijonee Chowdhury
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Secretary <br />
              Contact no: +91-9874083087
              <br />
              Mail id: xts@sxccal.edu
            </p>
          </div>

          {/* Second Contact */}
          <div className="bg-black bg-opacity-60 rounded-lg p-4 sm:p-6 max-w-xs w-full text-center">
            <img
              src={archisman}
              alt="Archisman Manna"
              className="w-24 h-24 sm:w-full sm:h-auto rounded-full sm:rounded-lg mb-4 mx-auto"
            />
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
              Archisman Manna
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Assistant Secretary <br />
              Contact no: +91-8420304488
              <br />
              Mail id: xts@sxccal.edu
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-white py-4">
        <h2 className="text-xs sm:text-sm">
          The Xaverian Theatrical Society is indebted to ©{" "}
          <a
            href="https://keshavkoolbharadwaj.github.io/KeshavBharadwaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Keshav Bharadwaj
          </a>{" "}
          for the development of this website.
        </h2>
      </footer>
    </div>
  );
};

export default ContactUsPage;
