import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PopMovieInfoPage from "../components/PopMovieInfoPage";
import MediaTrailer from "../components/MediaTrailer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PopMovieCardInfo() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const movieInfoURL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const trailerKeyURL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };

    Promise.all([
      axios.get(movieInfoURL, options),
      axios.get(trailerKeyURL, options),
    ])
      .then(([movieInfoRes, trailerKeyRes]) => {
        setMovieInfo(movieInfoRes.data);

        const trailer = trailerKeyRes.data.results.find(
          (item) => item.type == "Trailer" && item.site == "YouTube",
        );
        const fallback = trailerKeyRes.data.results.find(
          (item) => item.site == "YouTube",
        );
        if (trailer) setTrailerKey(trailer.key);
        else if (fallback) setTrailerKey(fallback.key);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movieInfo) {
    return (
      <div className="text-center text-2xl pt-40 text-black">
        Loading...................
      </div>
    );
  }

  return (
    <div className="bg-gray-300">
      <Navbar />
      <PopMovieInfoPage key={movieInfo.id} info={movieInfo} />
      <div className=" text-red-500 bg bg-white text-center py-5 text-2xl md:text-3xl lg:text-4xl font-bold">
        Official Trailer
      </div>
      <MediaTrailer trailerKey={trailerKey} />
      <Footer />
    </div>
  );
}

export default PopMovieCardInfo;
