import React, { useContext } from "react";
import Movie from "../movie/movie";
import { MoviesContext } from "../../context/moviesContext";

const Movies = () => {
  const [movies, setMovies] = useContext(MoviesContext);

  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};
export default Movies;
