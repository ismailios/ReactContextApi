import React, { useContext } from "react";

import { MoviesContext } from "../../context/moviesContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MoviesContext);

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <h2 className="navbar-brand">
          Nombre de Movies : <strong>{movies.length}</strong>
        </h2>
      </nav>
    </div>
  );
};
export default Nav;
