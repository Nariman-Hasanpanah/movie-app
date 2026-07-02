import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import PopSerieInfoPage from "../components/PopSerieInfoPage";
import Navbar from "../components/Navbar";

function PopSerieCardInfo() {
  const [serieInfo, setSerieInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const serieInfoURL = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TOKEN,
      },
    };

    axios
      .get(serieInfoURL, options)
      .then((serieInfoRes) => {
        setSerieInfo(serieInfoRes.data);
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
    <div className="bg-gray-300">
      <Navbar />
      <PopSerieInfoPage key={serieInfo.id} info={serieInfo} />
    </div>
  );
}

export default PopSerieCardInfo;
