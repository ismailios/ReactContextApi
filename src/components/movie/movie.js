import React from "react";

const Movie = props => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.price}</h5>
    </div>
  );
};

export default Movie;
