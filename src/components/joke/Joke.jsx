import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Single from "./Single";
import TwoPart from "./TwoPart";
import Randomiser from "./Randomizer";

import axios from "axios";

function Joke({ category }) {
  const [jokeData, setJokeData] = useState("");

  const getJoke = () => {
    const req = {
      url: "https://v2.jokeapi.dev/joke",
      category: category,
      blacklistFlags: "nsfw,religious,racist,sexist",
    };

    axios
      .get(`${req.url}/${req.category}?blacklistFlags=${req.blacklistFlags}`)
      .then((res) => setJokeData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getJoke();
  }, [category]);

  return (
    <div>
      <div className="joke">
        <div className="joke__emoji">
          <i className="far fa-laugh-squint"></i>
        </div>

        <div className="joke__body">
          {jokeData.type === "single" ? (
            <Single joke={jokeData.joke} />
          ) : (
            jokeData.type === "twopart" && (
              <TwoPart setup={jokeData.setup} delivery={jokeData.delivery} />
            )
          )}
        </div>

        <div className="joke__details">
          <ul>
            <li><span>Language:</span> {jokeData.lang} </li>
            <li><span>Type:</span> {jokeData.type} </li>
            <li><span>Category:</span> {jokeData.category} </li>
          </ul>
        </div>
      </div>

      <Randomiser getJoke={getJoke} />
    </div>
  );
}

export default Joke;

Joke.propTypes = {
  category: PropTypes.string.isRequired,
};

Joke.defaultProps = {
  category: "Any",
};
