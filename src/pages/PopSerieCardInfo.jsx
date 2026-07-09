import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PopSerieInfoPage from "../components/PopSerieInfoPage";
import MediaTrailer from "../components/MediaTrailer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PopSerieCardInfo() {
  const [serieInfo, setSerieInfo] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const serieInfoURL = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const trailerKeyURL = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };

    Promise.all([
      axios.get(serieInfoURL, options),
      axios.get(trailerKeyURL, options),
    ])
      .then(([serieInfoRes, trailerKeyRes]) => {
        setSerieInfo(serieInfoRes.data);

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

  if (!serieInfo) {
    return (
      <div className="text-center text-2xl pt-40 text-black">
        Loading...................
      </div>
    );
  }

  return (
    <div className="bg-gray-300 dark:bg-gray-800">
      <Navbar />
      <PopSerieInfoPage key={serieInfo.id} info={serieInfo} />
      <div className=" text-red-500 dark:text-yellow-400 bg-white dark:bg-black text-center py-5 text-2xl md:text-3xl lg:text-4xl font-bold">
        Official Trailer
      </div>
      <MediaTrailer trailerKey={trailerKey} />
      <Footer />
    </div>
  );
}

export default PopSerieCardInfo;
