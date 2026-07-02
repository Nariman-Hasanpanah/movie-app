import { useRef } from "react";

function PopSerieInfoPage({ info }) {
  const image = useRef(null);

  return (
    <div
      key={info.id}
      className="flex flex-col px-5 justify-center gap-5 md:gap-10 items-center bg-white text-white md:flex-row md:py-10 lg:pt-20 lg:pb-10"
    >
      <div className="flex justify-center items-center px-5 pt-9 lg:pt-0">
        <img
          className="w-45 rounded-md lg:w-75 active:allow cursor-pointer hover:opacity-80"
          src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
          ref={image}
          onClick={handleFullscreen}
          alt=""
        />
      </div>
      <div className="rounded-2xl py-5 mb-5 bg-gray-200">
        <div className="flex flex-col justify-center items-center mt-2 text-black">
          <p className="mb-5 text-xl font-bold text-left md:text-3xl lg:w-125 lg:text-4xl">
            {info.title}
            {info.original_name}
          </p>

          <div className="flex gap-4 justify-start">
            {info.genres.map((genre) => (
              <div
                key={genre.id}
                className=" rounded-lg flex justify-center font-bold text-red-600"
              >
                <p className="text-xs">{genre.name} </p>
              </div>
            ))}
          </div>
          <p className=" text-center mx-6 mt-3 text-sm md:text-base md:w-100 lg:text-base lg:w-125">
            {info.overview}
          </p>
        </div>

        <div className="mx-4 flex gap-2 font-bold text-red-600 py-4 ml-7">
          <p className="border rounded px-2 text-xs lg:text-md">
            {`IMDB : ${info.vote_average}`}
          </p>
          <p className="border rounded px-2 text-xs lg:text-md">
            {`Seasons : ${info.number_of_seasons}`}
          </p>
          <p className="border rounded px-2 text-xs lg:text-md">
            {`Episodes : ${info.number_of_episodes}`}
          </p>
        </div>
      </div>
    </div>
  );

  function handleFullscreen() {
    image.current.requestFullscreen();
  }
}

export default PopSerieInfoPage;
