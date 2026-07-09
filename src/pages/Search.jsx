import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import SerieCard from "../components/SerieCard";
import Footer from "../components/Footer";
import NotFound from "../assets/not-found.png";

function Search() {
  const { query } = useParams();
  const resultRef = useRef();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const searchURL = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };
    axios
      .get(searchURL, options)
      .then((res) => {
        const movies = res.data.results.filter(
          (item) => item.media_type === "movie",
        );
        const series = res.data.results.filter(
          (item) => item.media_type === "tv",
        );
        setMovies(movies);
        setSeries(series);
      })
      .catch((err) => console.error(err));
  }, [query]);

  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
    if (movies.length === 0 || series.length === 0)
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  });

  return (
    <>
      <div className="bg-white dark:bg-black">
        <Hero />
        <div id="results" ref={resultRef}>
          {movies.length > 0 && (
            <>
              <p className="py-10 text-red-600 dark:text-yellow-400 text-center pb-15 text-xl sm:text-2xl lg:text-4xl font-bold">
                {movies.length} Movies found for {query}
              </p>
              <div className="grid grid-cols-2 gap-5 px-3 justify-center sm:grid-cols-3 sm:px-5 md:px-8 md:grid-cols-4 lg:grid-cols-6 lg:px-28 lg:pb-10">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movies={movie} />
                ))}
              </div>
            </>
          )}

          {series.length > 0 && (
            <>
              <p className="py-10 text-red-600 dark:text-yellow-400 text-center pb-15 text-xl sm:text-2xl lg:text-4xl font-bold">
                {series.length} TV Series found for {query}
              </p>
              <div className="grid grid-cols-2 gap-5 px-3 pb-10 justify-center sm:grid-cols-3 sm:px-5 md:pb-10 md:grid-cols-4 lg:grid-cols-6 lg:px-28 lg:pb-10">
                {series.map((serie) => (
                  <SerieCard key={serie.id} series={serie} />
                ))}
              </div>
            </>
          )}

          {movies.length === 0 && series.length === 0 && (
            <div>
              <p className="text-center text-red-600 dark:text-yellow-400 text-xl md:text-2xl lg:text-4xl my-5 md:my-10">
                0 results found for {query}
              </p>
              <div
                className="flex justify-center items-center px-10 pb-10"
                id="img-container"
              >
                <img
                  className="w-130 border-2 border-gray-300"
                  src={NotFound}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Search;
