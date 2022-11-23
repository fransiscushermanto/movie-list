import React from "react";
import useGetMovies from "./repository/use-get-movies";

const Home = () => {
  const { movies, status } = useGetMovies();

  console.log(status, movies);

  return <div>Home</div>;
};

export default Home;
