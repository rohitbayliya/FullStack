import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) =>
        setError("Could not load movies. Please try again later.")
      );
  }, []);

  return (
    <div className="page">
      <h1 className="page__title">Upcoming Movies</h1>

      {error && <p className="error">{error}</p>}

      <div className="grid">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
