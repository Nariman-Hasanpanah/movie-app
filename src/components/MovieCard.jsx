import { Link } from "react-router";
const MovieCard = ({ movies }) => {
  return (
    <>
      <Link to={`/movieinfo/${movies.id}`}>
        <div
          className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
          key={movies.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            className="rounded-3xl"
            alt=""
          />
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
