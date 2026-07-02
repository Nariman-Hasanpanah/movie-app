import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PopMovieInfoPage from "../components/PopMovieInfoPage";
import Navbar from "../components/Navbar";

function PopMovieCardInfo() {
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const movieInfoURL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };

    axios
      .get(movieInfoURL, options)
      .then((movieInfoRes) => {
        setMovieInfo(movieInfoRes.data);
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
    </div>
  );
}

export default PopMovieCardInfo;
