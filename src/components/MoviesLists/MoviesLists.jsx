import React, { Component } from "react";
import Movies from "../Movies/Movies";

const MoviesLists = props => {
  let movies = props.filterMovies.map((movie, i) => {
    return (
      <Movies
        key={i}
        movieId={movie._id}
        title={movie.titleFr}
        age={movie.age}
        type={movie.type}
        released={movie.released}
        actors={movie.actors}
        poster={movie.poster}
        synopsis={movie.synopsisEn}
      />
    );
  });
  return (
    <section className="container-movies home grid-col-3">{movies}</section>
  );
};

export default MoviesLists;
