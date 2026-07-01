import { useContext } from "react";
import { PopularMediaContext } from "../context/PopularMediaContext";
import SerieCard from "./SerieCard";

const PopularTVSeries = () => {
  const { series } = useContext(PopularMediaContext);
  return (
    <>
      <div id="popular-series" className="bg-white pb-10">
        <div
          id="popular-series-title"
          className=" py-10 text-red-600 text-center pb-10 text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Popular TV Series
        </div>
        <div className="grid grid-cols-2 gap-5 px-3 justify-center sm:grid-cols-3 sm:px-5 md:px-8 md:grid-cols-4 lg:grid-cols-6 lg:px-28">
          {series.map((serie) => (
            <SerieCard key={serie.id} series={serie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularTVSeries;
