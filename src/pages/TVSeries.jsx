import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SerieCard from "../components/SerieCard";
import { MediaContext } from "../context/MediaContext";
import { useContext } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TVSeries = () => {
  const { series, setCount } = useContext(MediaContext);

  const addCount = () => setCount((count) => count + 1);

  const reduceCount = () =>
    setCount((count) => (count > 1 ? count - 1 : count));

  return (
    <>
      <div className="bg-gray-300 dark:bg-black">
        <Navbar />
        <div className="bg-white dark:bg-black pb-10">
          <p className="py-10 text-red-600 dark:text-yellow-400  text-center pb-10 text-3xl md:text-4xl lg:text-5xl font-bold">
            On The Air
          </p>
          <div className="grid grid-cols-2 gap-5 px-3 justify-center sm:grid-cols-3 sm:px-5 md:px-8 md:grid-cols-4 md:pb-5 lg:grid-cols-6 lg:px-28">
            {series.map((serie) => (
              <SerieCard key={serie.id} series={serie} />
            ))}
          </div>
          <div
            id="btns"
            className="flex justify-around items-center mx-auto mt-9"
          >
            <button
              className=" bg-gray-700 hover:opacity-70 text-white px-2 md:px-5 md:py-1 flex items-center gap-3 cursor-pointer"
              onClick={reduceCount}
            >
              <BsArrowLeft />
              PREV PAGE
            </button>
            <button
              className="bg-gray-700 hover:opacity-70 text-white px-2 md:px-5 md:py-1 flex items-center gap-3 cursor-pointer"
              onClick={addCount}
            >
              NEXT PAGE <BsArrowRight />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TVSeries;
