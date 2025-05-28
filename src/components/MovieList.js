import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-white text-xl md:text-3xl font-semibold py-4">{title}</h1>
      <div className="overflow-x-auto scrollbar-hide whitespace-nowrap">
        {movies?.map((movie) => (
          <span key={movie.id} className="inline-block align-top">
            <MovieCard posterPath={movie.poster_path} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
