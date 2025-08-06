import React, { useEffect, useState } from "react";
import "./Banner-style.css";
import axios from "../../../../axios";
import { APIKEY } from "../../../../constants/Constants";
import { imageUrl } from "../../../../constants/Constants";
import YouTube from "react-youtube";

function Banner() {
  const [movie, setMovie] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    if (moviesList.length === 0) {
      axios
        .get(`trending/all/week?api_key=${APIKEY}&language=en-US`)
        .then((response) => {
          setMoviesList(response.data.results);
          const randomIndex = Math.floor(
            Math.random() * response.data.results.length
          );
          const randomMovie = response.data.results[randomIndex];
          setMovie(randomMovie);
        })
        .catch((error) => {
          console.log("Error in banner " + error);
        });
    } else {
      const randomIndex = Math.floor(Math.random() * moviesList.length);
      const randomMovie = moviesList[randomIndex];
      setMovie(randomMovie);
    }
  }, [moviesList]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id: any) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
      .then((response) => {
        console.log(response);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].id);
        } else {
          console.log("empty array");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 50%), linear-gradient(to bottom, rgba(0, 0, 0,0.9), transparent 50%), linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent 50%), linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 50%), url(${
          movie ? (
            urlId ? (
              <YouTube opts={opts} videoId={urlId.key}></YouTube>
            ) : (
              imageUrl + movie.backdrop_path
            )
          ) : (
            ""
          )
        })`,
      }}
      className="banner"
      onClick={() => handle (movie.id)}
    >
      <div className="contents">
        <h1 className="title">
          {movie ? (movie.title ? movie.title : movie.name) : ""}
        </h1>
        <div className="btnbanner">
          <button className="btncontent">Play</button>
          <button className="btncontent">My List</button>
        </div>
        <h3 className="decription">{movie ? movie.overview : " "}</h3>
      </div>
      <div className="fadeeffect"></div>
    </div>
  );
}

export default Banner;
