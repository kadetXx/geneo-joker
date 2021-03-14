import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Single from "./Single";
import TwoPart from "./TwoPart";
import Randomiser from "./Randomizer";
import Alert from "../alert/Alert";
import Loader from "../loader/Loading";

import axios from "axios";

function Joke({ category }) {
  const [jokeData, setJokeData] = useState("");
  const [alert, setAlert] = useState({
    status: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const getJoke = () => {
    setAlert({
      ...alert,
      status: false,
    });

    setLoading(true);

    const req = {
      url: "https://v2.jokeapi.dev/joke",
      category: category,
      blacklistFlags: "nsfw,religious,racist,sexist",
    };

    axios
      .get(`${req.url}/${req.category}?blacklistFlags=${req.blacklistFlags}`)
      .then((res) => {
        setTimeout(() => {
          setJokeData(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          status: true,
          message: err.message,
        });
      });
  };

  useEffect(() => {
    getJoke();

    //eslint-disable-next-line
  }, [category]);

  return (
    <div>
      <div className="joke">
        <div className="joke__emoji">
          <i className="far fa-laugh-squint"></i>
        </div>

        {alert.status ? (
          <Alert message={alert.message} />
        ) : loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className="joke__body">
              {jokeData.type === "single" ? (
                <Single joke={jokeData.joke} />
              ) : (
                jokeData.type === "twopart" && (
                  <TwoPart
                    setup={jokeData.setup}
                    delivery={jokeData.delivery}
                  />
                )
              )}
            </div>

            <div className="joke__details">
              <ul>
                <li>
                  <span>Language:</span> {jokeData.lang}
                </li>
                <li>
                  <span>Type:</span> {jokeData.type}
                </li>
                <li>
                  <span>Category:</span> {jokeData.category}
                </li>
              </ul>
            </div>
          </React.Fragment>
        )}
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
