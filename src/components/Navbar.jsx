import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdLightMode, MdDarkMode, MdBrightness1 } from "react-icons/md";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        id="navbar"
        className="relative z-10 pb-3 bg-transparent bg-gray-300 lg:pb-5 flex justify-center items-center text-white pt-5"
      >
        <div className="flex justify-center items-center overflow-hidden gap-10 sm:gap-30 md:gap-50 lg:gap-110">
          <div
            id="logo"
            className="flex flex-col gap-4 mx-2 md:flex-row md:gap-10 lg:gap-15"
          >
            <Link
              to="/signin"
              className="flex justify-center text-sm font-bold text-blue-600 hover:opacity-60 md:text-lg md:items-center"
            >
              Sign In
            </Link>
            <Link
              to="/"
              className="text-md font-bold hover:opacity-80 text-red-600 bg-white rounded-3xl px-2 py-1 sm:text-3xl lg:text-4xl"
            >
              NHP-MOVIE
            </Link>
          </div>
          <div
            id="contents"
            className="flex items-center gap-6 font-medium text-md sm:text-xl md:gap-8 text-red-600 lg:text-2xl lg:gap-10 lg:mx-10"
          >
            <Link to="/movies" className="hover:opacity-60">
              Movies
            </Link>
            <Link to="/tvseries" className=" hover:opacity-60">
              TV Series
            </Link>
            <div
              id="toggle-theme"
              onClick={toggleTheme}
              className={`relative flex flex-col items-center rounded-full border-2 text-xl gap-3 p-0.5 md:p-1 ${darkMode ? "bg-black border-yellow-400" : "bg-gray-100 border-red-600"} md:flex-row cursor-pointer`}
            >
              <MdLightMode className="text-yellow-400 text-xl md:text-2xl"></MdLightMode>
              <MdDarkMode className="text-yellow-400 text-xl md:text-2xl"></MdDarkMode>
              <MdBrightness1
                id="toggle-ball"
                className={`absolute text-2xl md:text-3xl ${darkMode ? "top-0 md:top-[1px] left-0 text-white" : "bottom-0 md:bottom-[1px] right-0 text-black"}`}
              ></MdBrightness1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
