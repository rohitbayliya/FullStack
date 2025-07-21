import React from "react"

export default function Card({ movie }) {
  return (
    <div className="cards">
      <img
        className="cards__img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="cards__overlay">
        <div className="card__title">{movie.title}</div>
        <div className="card__runtime">
          {movie.release_date}
          <span className="card__rating">⭐ {movie.vote_average}</span>
        </div>
        <div className="card__description">
          {movie.overview?.slice(0, 110)}...
        </div>
      </div>
    </div>
  )
}
