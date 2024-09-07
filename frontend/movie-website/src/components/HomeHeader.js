import React, { useState } from 'react';
import './HomeHeader.css'; // Updated CSS file name

const movieData = [
    {
        id: 1,
        name: 'Movie Title 1',
        age: 'PG-13',
        duration: '2h30m',
        releasedYear: '2022',
        genres: 'Action, Adventure',
        description: 'A brief description of the movie goes here.',
        imageUrl: 'https://via.placeholder.com/600x300?text=Movie+1', // Replace with actual image URL
    },
    {
        id: 2,
        name: 'Movie Title 2',
        age: 'R',
        duration: '1h30m',
        releasedYear: '2023',
        genres: 'Drama, Thriller',
        description: 'Another brief description of the movie goes here.',
        imageUrl: 'https://via.placeholder.com/600x300?text=Movie+2', // Replace with actual image URL
    },
    // Add more movie data as needed
];

const HomeHeader = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movieData.length);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movieData.length) % movieData.length);
    };

    return (
        <div className="home-header">
            <div className="header-background">
                <div className="slide-container">
                    <div className="slide" style={{ backgroundImage: `url(${movieData[currentIndex].imageUrl})` }}>
                        <div className="slide-info">
                            <h1>{movieData[currentIndex].name}</h1>
                            <p>{movieData[currentIndex].age} | {movieData[currentIndex].duration} | {movieData[currentIndex].releasedYear} | {movieData[currentIndex].genres}</p>
                            <p>{movieData[currentIndex].description}</p>
                            <div className="buttons">
                                <button className="view-btn">View</button>
                                <button className="favorite-btn">Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                    <div className="slide-controls">
                        <button className="prev" onClick={handlePrevSlide}>❮</button>
                        <button className="next" onClick={handleNextSlide}>❯</button>
                    </div>
                    <div className="slide-indicators">
                        {movieData.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
