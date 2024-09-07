import React, { useState } from 'react';
import HomeMovieCard from './HomeMovieCard'; // Import the movie card component
import './HomeTRMovies.css'; // Ensure correct path to CSS

const movieData = [
  {
    id: 1,
    name: 'Inception',
    age: 'PG-13',
    imdbRating: '8.8',
    releasedYear: '2010',
    genres: 'Action, Sci-Fi',
    imageUrl: 'https://th.bing.com/th/id/R.7d82d780b0679dba7737c24246e50818?rik=b2HcjJxLhtY3MA&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    name: 'The Dark Knight',
    age: 'PG-13',
    imdbRating: '9.0',
    releasedYear: '2008',
    genres: 'Action, Crime',
    imageUrl: 'https://example.com/dark-knight.jpg',
  },
  {
    id: 3,
    name: 'The Matrix',
    age: 'R',
    imdbRating: '8.7',
    releasedYear: '1999',
    genres: 'Action, Sci-Fi',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  {
    id: 4,
    name: 'Interstellar',
    age: 'PG-13',
    imdbRating: '8.6',
    releasedYear: '2014',
    genres: 'Adventure, Drama, Sci-Fi',
    imageUrl: 'https://example.com/interstellar.jpg',
  },
  {
    id: 5,
    name: 'Fight Club',
    age: 'R',
    imdbRating: '8.8',
    releasedYear: '1999',
    genres: 'Drama',
    imageUrl: 'https://example.com/fight-club.jpg',
  },
  // Add more movies as needed...
];

export default function HomeTRSeries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3; // Number of cards visible at once

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= movieData.length
        ? 0 // Go back to the first set when reaching the end
        : prevIndex + visibleCards
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(movieData.length - visibleCards, 0) // Go to the last set
        : prevIndex - visibleCards
    );
  };

  return (
    <div className="home-tr-movies">
      <h2 className="section-title">Top Rated TV Shows</h2>
      <div className="slider-container">
        <button className="prev-slide" onClick={handlePrevSlide}>❮</button>
        <div className="slider">
          {movieData.map((movie, index) => (
            <div
              key={movie.id}
              className="movie-card-container"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                width: `${100 / visibleCards}%`, // Each card takes up a portion of the container
              }}
            >
              <HomeMovieCard movie={movie} />
            </div>
          ))}
        </div>
        <button className="next-slide" onClick={handleNextSlide}>❯</button>
      </div>
    </div>
  );
}
