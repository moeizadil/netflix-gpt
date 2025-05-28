import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen">
  <img className="w-full h-full object-cover" src={BG_URL} alt="logo" />
</div>
<div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
