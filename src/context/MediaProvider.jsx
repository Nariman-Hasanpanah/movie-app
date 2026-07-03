import { useState, useEffect } from "react";
import { MediaContext } from "./MediaContext";
import axios from "axios";

export const MediaProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const moviesURL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${count}`;
    const seriesURL = `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${count}`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };
    Promise.all([axios.get(moviesURL, options), axios.get(seriesURL, options)])
      .then(([moviesRes, seriesRes]) => {
        setMovies(moviesRes.data.results.slice(0, 18));
        setSeries(seriesRes.data.results.slice(0, 18));
      })
      .catch((err) => console.error(err));
  }, [count]);

  return (
    <MediaContext.Provider value={{ movies, series, setCount }}>
      {children}
    </MediaContext.Provider>
  );
};
