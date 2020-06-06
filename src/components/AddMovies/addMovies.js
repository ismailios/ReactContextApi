import React, { useState, useContext } from "react";

import { MoviesContext } from "../../context/moviesContext";

const AddMovies = () => {
  const [movies, setMovies] = useContext(MoviesContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name, price }]);
  };
  //   const numbers = [1, 2, 3, 4, 5];

  //   const sum = numbers.reduce((accumalted, currentvalue) => {
  //     return accumalted - currentvalue;
  //   });

  console.log(sum);
  return (
    <div>
      <form onSubmit={addMovie}>
        <div className="form-group">
          <input
            type="text"
            onChange={updateName}
            className="form-control"
            name="name"
            placeholder="Enter movie name"
          />
          <input
            type="text"
            onChange={updatePrice}
            className="form-control"
            name="price"
            placeholder="Enter price"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
