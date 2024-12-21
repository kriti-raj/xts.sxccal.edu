/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Cards = ({ src, index }) => {
  const routes = [
    "/about-us",
    "/gallery",
    "/events",
    "/registrations",
    "/sponsor-us",
    "/contact-us",
  ];

  return (
    <>
      <Link key={index} to={routes[index]} className="group">
        <div className="relative overflow-hidden h-48 w-32 sm:h-60 sm:w-40 mx-auto transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            src={src}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-2 text-center text-white text-sm opacity-0 group-hover:opacity-100 transition duration-500">

          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
