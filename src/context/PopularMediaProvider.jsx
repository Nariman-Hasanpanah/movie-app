import { useState, useEffect } from "react";
import { PopularMediaContext } from "./PopularMediaContext";
import axios from "axios";
export const PopularMediaProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const moviesURL = `https://api.themoviedb.org/3/movie/popular`;
    const seriesURL = `https://api.themoviedb.org/3/tv/popular`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };
    Promise.all([axios.get(moviesURL, options), axios.get(seriesURL, options)])
      .then(([moviesRes, seriesRes]) => {
        setMovies(moviesRes.data.results.slice(0, 12));
        setSeries(seriesRes.data.results.slice(0, 12));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PopularMediaContext.Provider value={{ movies, series }}>
      {children}
    </PopularMediaContext.Provider>
  );
};
