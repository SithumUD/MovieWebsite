import React from 'react';
import './HomeMiddleBanner.css'; // Ensure correct path

const HomeMiddleBanner = () => {

    const movie = {
        name: 'Inception',
        genres: 'Action, Sci-Fi',
        releasedYear: '2010',
        age: 'PG-13',
        duration: '2h 28m',
        imageUrl: 'https://th.bing.com/th/id/R.68ef29eab90c100d6c5e6558694f902c?rik=4amo10HRS%2fY9DA&pid=ImgRaw&r=0',
      };

  return (
    <div className="middle-banner" style={{ backgroundImage: `url(${movie.imageUrl})` }}>
      <div className="banner-content">
        <div className="movie-details">
          <h1>{movie.name}</h1>
          <p>Genre: {movie.genres} | Released: {movie.releasedYear} | Age Rating: {movie.age} | Duration: {movie.duration}</p>
        </div>
        <div className="banner-button">
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddleBanner;
