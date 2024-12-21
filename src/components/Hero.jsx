import {
  AboutUs,
  BgLandscape,
  ContactUs,
  Events,
  Logo,
  Gallery,
  Registrations,
  SponsorUs,
} from "./Assets.js";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col overflow-x-hidden relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgLandscape})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar Logo={Logo} />
      <br /><br /><br /><br />
      <div className="flex-grow flex flex-col justify-center mt-16 sm:mt-0 relative z-10">
        <div className="flex justify-center items-center px-4 sm:px-0">
          <style>
            {`
              @keyframes fade-in-up {
                from {
                  opacity: 0;
                  transform: translateY(50px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .animate-fade-in-up {
                animation-name: fade-in-up;
                animation-duration: 1s;
              }
            `}
          </style>
          <div className="bg-black bg-opacity-60 m-3 rounded-lg shadow-lg p-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl animate-fade-in-up">
            <p
              style={{
                fontFamily: "Times New Roman, serif",
                color: "white",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "gold",
                }}
              >
                Welcome to the Xaverian Theatrical Society!
              </span>{" "}
              <br />
              Theatre is an artform of expressions, and we, at XTS, intend to unleash
              the creativity and passion for theatre among students. Together as a family,
              we attempt to build a dedicated and consolidated team towards our future endeavors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-end w-full px-4 py-4">
          {[
            AboutUs,
            Gallery,
            Events,
            Registrations,
            SponsorUs,
            ContactUs,
          ].map((src, index) => (
            <Cards key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
