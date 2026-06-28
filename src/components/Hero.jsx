import { Link, useNavigate } from "react-router";
import { useState } from "react";
import HeroBackground from "../assets/hero-background.jpg";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div
        id="header"
        className="relative h-125 md:h-135 lg:h-150 pt-5 bg-hero-pattern bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div id="black-overlay" className="absolute inset-0 bg-black/60"></div>
        <div
          id="title"
          className="relative z-10 flex flex-col justify-center items-center mt-8 pt-15 md:pt-18 lg:pt-24"
        >
          <div
            id="welcome-msg"
            className="flex flex-col text-center text-white text-2xl mx-2 gap-4 md:text-4xl lg:text-5xl"
          >
            <p className="font-bold">
              <span className="text-yellow-400">Cinematic </span>Pleasure
              Awaits:
            </p>
            <p className="font-bold">
              Stream the Magic, Feel the{" "}
              <span className="text-yellow-400">Story</span>.
            </p>
            <p className="text-white text-sm mt-4">
              Welcome to your streaming escape!
            </p>
          </div>
          <div
            id="search-section"
            className="mt-10 flex flex-col justify-center gap-6 items-center h-22 md:flex md:flex-row md:mt-15 lg:flex lg:flex-row lg:mt-15 md:gap-0 lg:gap-0"
          >
            <input
              type="text"
              placeholder="Search......"
              className=" overflow-hidden w-75 h-9 md:w-100 lg:w-125 border md:h-12 lg:h-12 px-4 py-2 outline-none rounded-lg md:rounded-r-none md:rounded-l-lg lg:rounded-r-none lg:rounded-l-lg bg-gray-100"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query.trim() !== "") {
                  navigate(`/search/${query}`);
                  setQuery("");
                }
              }}
            />
            {query.trim() !== "" ? (
              <Link
                to={`/search/${query}`}
                onClick={() => setQuery("")}
                className="bg-red-600 py-3 px-4 opacity-80 hover:opacity-100 text-white font-medium rounded-4xl md:rounded-l-none md:rounded-r-lg lg:rounded-l-none lg:rounded-r-lg cursor-pointer"
              >
                Search &gt;
              </Link>
            ) : (
              <p
                onClick={() => setQuery("")}
                className=" bg-red-600 py-3 px-4 opacity-80 hover:opacity-100 text-white font-medium rounded-4xl md:rounded-l-none md:rounded-r-lg lg:rounded-l-none lg:rounded-r-lg cursor-pointer"
              >
                Search &gt;
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
