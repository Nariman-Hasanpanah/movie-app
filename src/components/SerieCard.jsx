import { Link } from "react-router";
const SerieCard = ({ series }) => {
  return (
    <>
      <Link to={`/tvserieinfo/${series.id}`}>
        <div
          className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
          key={series.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
            className="rounded-3xl"
            alt=""
          />
        </div>
      </Link>
    </>
  );
};

export default SerieCard;
