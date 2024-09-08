import React from 'react';
import MovieCard from '../components/HomeMovieCard'; // Ensure correct path to MovieCard component
import './Movies.css'; // Ensure correct path to the CSS file


const sampleMovies = [
  {
    id: 1,
    name: 'Inception',
    genres: 'Sci-Fi',
    releasedYear: '2010',
    imdbRating: 'PG-13',
    imageUrl: 'https://example.com/inception.jpg',
  },
  {
    id: 2,
    name: 'The Matrix',
    genres: 'Action',
    releasedYear: '1999',
    imdbRating: 'R',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  {
    id: 3,
    name: 'The Matrix',
    genres: 'Action',
    releasedYear: '1999',
    imdbRating: 'R',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  {
    id: 4,
    name: 'The Matrix',
    genres: 'Action',
    releasedYear: '1999',
    imdbRating: 'R',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  {
    id: 5,
    name: 'The Matrix',
    genres: 'Action',
    releasedYear: '1999',
    imdbRating: 'R',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  {
    id: 6,
    name: 'The Matrix',
    genres: 'Action',
    releasedYear: '1999',
    imdbRating: 'R',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  {
    id: 7,
    name: 'The Matrix',
    genres: 'Action',
    releasedYear: '1999',
    imdbRating: 'R',
    imageUrl: 'https://example.com/matrix.jpg',
  },
  // Add more movie data here
];

export default function Movies() {
  return (
    <div className="movies-page">
      {/* Movie Cards */}
      <div className="movies-grid">
        {sampleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
