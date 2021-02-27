import api from "api";
import { getRandomIntInclusive } from "lib";
import { useQuery } from "react-query";

function renderRandomImage({ data: { memes } }) {
  return (
    <img
      src={memes[getRandomIntInclusive(0, memes.length - 1)].url}
      alt="Random meme"
    />
  );
}

const Meme = () => {
  async function fetchMemeImages() {
    // AWAIT (or come back) when this PROMISE is SETTLED
    const memes = await api.index();
    return memes;
  }

  // DESTRUCTURE the desired keys from the object returned from useQuery
  const { isSuccess, data } = useQuery("memes", fetchMemeImages);

  // Ternary - question ?  yes : no
  return isSuccess ? renderRandomImage(data) : <p>Loading...</p>;
};

export default Meme;
