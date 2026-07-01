import { useContext } from "react";
import { PopularMediaContext } from "../context/PopularMediaContext";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const { movies } = useContext(PopularMediaContext);
  return (
    <>
      <div id="popular-movies" className="bg-white">
        <div
          id="popular-movies-title"
          className="py-10 text-red-600 text-center pb-10 text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Popular Movies
        </div>
        <div className="grid grid-cols-2 gap-5 px-3 justify-center sm:grid-cols-3 sm:px-5 md:px-8 md:grid-cols-4 lg:grid-cols-6 lg:px-28">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movies={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
