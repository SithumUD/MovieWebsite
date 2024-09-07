import React from 'react';
import './HomeMovieCard.css'; // Ensure the correct path to CSS file

export default function HomeMovieCard({ movie }) {

    


  return (
    <div className="movie-card">
      <div
        className="movie-card-background"
        style={{ backgroundImage: `url(${movie.imageUrl})` }}
      >
        <div className="movie-card-gradient">
          <div className="movie-card-info">
            <h2 className="movie-title">{movie.name}</h2>
            <p className="movie-details">
              {movie.age} | IMDb: {movie.imdbRating} | {movie.releasedYear}
            </p>
            <p className="movie-genres">{movie.genres}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
