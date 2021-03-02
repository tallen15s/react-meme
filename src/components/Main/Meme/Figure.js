import { TextContext } from "context";
import PropTypes from "prop-types";
import { useContext } from "react";

const Figure = ({ src }) => {
  const { topText: top, bottomText: bottom } = useContext(TextContext);
  <figure>
    <p className="bg-blue-400 text-5xl text-center text-blue-700">{top}</p>
    <img src={src} alt="Random meme" className="shadow-lg" />
    <p className="bg-blue-400 text-5xl text-center text-blue-700">{bottom}</p>
  </figure>;
};

Figure.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Figure;
