import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="relative z-10 pb-3 bg-gray-300 lg:pb-5 flex justify-center items-center text-white pt-5"
      >
        <div className="flex justify-center items-center overflow-hidden gap-10 sm:gap-30 md:gap-50 lg:gap-110">
          <div id="logo" className="mx-2 ">
            <Link
              to="/"
              className="text-md font-bold hover:opacity-80 text-red-600 bg-black rounded-4xl px-2 py-1 sm:text-3xl lg:text-4xl"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
