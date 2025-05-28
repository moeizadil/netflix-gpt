import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl">
      <img
        className="w-full h-full object-cover rounded-lg"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
