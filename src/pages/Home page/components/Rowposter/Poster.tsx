import "./Poster-style.css";
import { useEffect, useState } from "react";
import axios from "../../../../axios";
import { APIKEY, imageUrl } from "../../../../constants/Constants";

function Poster(props: any) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results || []); // Set movies to an empty array if response.data.results is undefined
        console.log(movies);
      })
      .catch((error) => {
        console.log("Error in psoter :" + error);
      });
  }, []);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.length > 0 ? ( // Check if movies array is not empty
          movies.map((objmovie) => (
            <div key={objmovie.id} className="movie-item">
              <img
                key={objmovie.id} // Add a unique key for each image in the map
                alt="Posters"
                className={props.isSmall ? "smallImageList" : "imagelist"}
                src={`${imageUrl + objmovie.backdrop_path}`}
              />
              <p className="moviename">
                {objmovie
                  ? objmovie.title
                    ? objmovie.title
                    : objmovie.original_name
                  : ""}
              </p>
            </div>
          ))
        ) : (
          <p>No movies found</p> // Display a message if movies array is empty
        )}
      </div>
    </div>
  );
}

export default Poster;
