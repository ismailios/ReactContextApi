import React, { useState, createContext } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter ",
      price: "12O£"
    },
    {
      name: "See ",
      price: "12O£"
    },
    {
      name: "Vikings ",
      price: "12O£"
    },
    {
      name: "The best offer ",
      price: "10O£"
    },
    {
      name: "Spiderman ",
      price: "40£"
    }
  ]);

  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MoviesContext.Provider>
  );
};
