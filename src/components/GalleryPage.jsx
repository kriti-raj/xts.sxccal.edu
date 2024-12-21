import { BgInternal, image1, image2, image3, image4, Logo } from "./Assets";
import Navbar from "./Navbar.jsx";

const GalleryPage = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center bg-fixed flex flex-col"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Navbar with Logo */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar Logo={Logo} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-16 pb-6 px-6">
        {/* Heading */}
        <br />
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8 drop-shadow-md"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Kaleidoscope
        </h1>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative">
            <img
              src={image1}
              alt="Description of image 1"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg text-sm sm:text-base">
              Theatre workshop by Sri Rwitobroto Mukherjee
            </p>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <img
              src={image2}
              alt="Description of image 2"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg text-sm sm:text-base">
              Sri Rudraprasad Sengupta, Sri Gautam Halder and Sri Agnijit Sen at
              Theaxav&apos;24 organised by XTS
            </p>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img
              src={image3}
              alt="Description of image 3"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg text-sm sm:text-base">
              &apos;Der Rücktritt,&apos; The Abdication, a theatrical production
              by XTS
            </p>
          </div>

          {/* Image 4 */}
          <div className="relative">
            <img
              src={image4}
              alt="Description of image 4"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg text-sm sm:text-base">
              Radio play workshop by Sri Agnijit Sen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
