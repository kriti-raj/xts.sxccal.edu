import { BgInternal, Logo } from "./Assets";
import Navbar from "./Navbar";

const RegistrationsPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,0,0,0.2) 50%, rgba(36,0,0,0.8) 80%), url(${BgInternal})`,
      }}
    >
      {/* Navbar at the top */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar Logo={Logo} />
      </div>

      <div className="flex flex-grow flex-col items-center justify-center p-6">
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center max-w-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <h1 className="text-3xl font-bold mb-4 transition-colors duration-300 hover:text-red-600">
            Registration for KHWAAB&apos;24!
          </h1>
          <p className="mb-4 transition-opacity duration-300 hover:opacity-80">
            Please{" "}
            <a
              href="https://docs.google.com/forms/d/1JUqjIsX0-lORvWE0EwFZGcGBew4BL2WTSOEhR-KkOHo/viewform"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Click Here
            </a>{" "}
            to fill up the form, we will contact you soon. Make sure you are
            logged in to a Gmail account.
          </p>
          <p className="mb-4 transition-opacity duration-300 hover:opacity-80">
            For further queries contact:
          </p>
          <ul className="list-disc list-inside mb-4 text-left">
            <li>Srijonee Chowdhury: +91 9874083087</li>
            <li>Archisman Manna: +91 8420304488</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrationsPage;
