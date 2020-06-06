import React, { Component } from "react";
import Movies from "./components/movies/movies";
import Nav from "./components/nav/nav";
import AddMovies from "./components/AddMovies/addMovies";

import { MoviesProvider } from "./context/moviesContext";

export default class App extends Component {
  render() {
    return (
      <MoviesProvider>
        <div>
          <Nav />
          <AddMovies />
          <Movies />
        </div>
      </MoviesProvider>
    );
  }
}
