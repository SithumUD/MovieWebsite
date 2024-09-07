import React, { useState, useCallback, useEffect } from 'react';
import HomeMovieCard from './HomeMovieCard'; // Ensure correct path to your movie card component
import './HomeGenre.css'; // Ensure the correct path to CSS file

const sampleData = {
    movies: [
        {
            id: 1,
            name: 'Inception',
            age: 'PG-13',
            imdbRating: '8.8',
            releasedYear: '2010',
            genres: 'Action, Sci-Fi',
            imageUrl: 'https://example.com/inception.jpg',
        },
        {
            id: 2,
            name: 'The Matrix',
            age: 'R',
            imdbRating: '8.7',
            releasedYear: '1999',
            genres: 'Action, Sci-Fi',
            imageUrl: 'https://example.com/matrix.jpg',
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
            name: 'The Matrix',
            age: 'R',
            imdbRating: '8.7',
            releasedYear: '1999',
            genres: 'Action, Sci-Fi',
            imageUrl: 'https://example.com/matrix.jpg',
        },
        {
            id: 5,
            name: 'The Matrix',
            age: 'R',
            imdbRating: '8.7',
            releasedYear: '1999',
            genres: 'Action, Sci-Fi',
            imageUrl: 'https://example.com/matrix.jpg',
        },
        // Add more movie data here...
    ],
    tvSeries: [
        {
            id: 1,
            name: 'The Matrix',
            age: 'R',
            imdbRating: '8.7',
            releasedYear: '1999',
            genres: 'Action, Sci-Fi',
            imageUrl: 'https://example.com/matrix.jpg',
        },
        {
            id: 2,
            name: 'Breaking Bad',
            age: 'R',
            imdbRating: '9.5',
            releasedYear: '2008',
            genres: 'Drama, Crime',
            imageUrl: 'https://example.com/breaking-bad.jpg',
        },
        // Add more TV series data here...
    ],
};

export default function HomeGenre() {
    const [selectedCategory, setSelectedCategory] = useState('movies');
    const [filteredData, setFilteredData] = useState(sampleData.movies);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    const handleFilterChange = useCallback(() => {
        const filtered = sampleData[selectedCategory].filter((item) => {
            const genreMatch = selectedGenre ? item.genres.toLowerCase().includes(selectedGenre.toLowerCase()) : true;
            const yearMatch = selectedYear ? item.releasedYear === selectedYear : true;
            const ratingMatch = selectedRating ? item.age === selectedRating : true;
            return genreMatch && yearMatch && ratingMatch;
        });
        console.log("Filtered Data:", filtered); // Debugging
        setFilteredData(filtered);
    }, [selectedCategory, selectedGenre, selectedYear, selectedRating]);

    useEffect(() => {
        handleFilterChange();
    }, [handleFilterChange]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedGenre(''); // Reset filters when category changes
        setSelectedYear('');
        setSelectedRating('');
        setFilteredData(sampleData[category]);
    };

    return (
        <div className="home-genre-section">
            <div className="genre-header">
                <button
                    className={`category-button ${selectedCategory === 'movies' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('movies')}
                >
                    Movies
                </button>
                <button
                    className={`category-button ${selectedCategory === 'tvSeries' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('tvSeries')}
                >
                    TV Series
                </button>
            </div>

            <div className="filters">
                <select
                    className="filter-dropdown"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedy">Comedy</option>
                    {/* Add more genres here */}
                </select>
                <select
                    className="filter-dropdown"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="">Select Release Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    {/* Add more years here */}
                </select>
                <select
                    className="filter-dropdown"
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                >
                    <option value="">Select Rating</option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG-13">PG-13</option>
                    <option value="R">R</option>
                    {/* Add more ratings here */}
                </select>
            </div>

            <div className={`card-grid ${filteredData.length === 0 ? 'empty' : ''}`}>
                {filteredData.length === 0 ? (
                    <p className="no-items-message">No items available in this category.</p>
                ) : (
                    filteredData.map((item) => (
                        <HomeMovieCard
                            key={item.id}
                            movie={item}
                        />
                    ))
                )}
            </div>

            <div className="view-more-container">
    <button className="view-more-button">View More</button>
</div>

        </div>
    );
}
