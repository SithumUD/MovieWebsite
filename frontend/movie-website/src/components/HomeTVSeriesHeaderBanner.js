import React, { useState } from 'react';
import './HomeTVSeriesHeaderBanner.css'; // Ensure correct path to CSS

const tvSeriesData = [
  {
    id: 1,
    name: 'Breaking Bad',
    releasedDate: '2008-01-20',
    endDate: '2013-09-29',
    status: 'Completed',
    seasons: 5,
    description: 'A high school chemistry teacher turned methamphetamine producer.',
    imageUrl: 'https://images.hdqwalls.com/wallpapers/breaking-bad-poster.jpg',
  },
  {
    id: 2,
    name: 'Stranger Things',
    releasedDate: '2016-07-15',
    endDate: 'Ongoing',
    status: 'Ongoing',
    seasons: 4,
    description: 'A group of kids uncover a series of supernatural mysteries.',
    imageUrl: 'https://th.bing.com/th/id/R.005ce1a3265219580297ae2b928403ba?rik=rP4bcaz0q9ZGEw&riu=http%3a%2f%2fwww.hdwallpaperslife.com%2fwp-content%2fuploads%2f2017%2f11%2fstranger_things-HD.jpg&ehk=N%2fBXbrgJY%2bnnZv%2bOCpQ0hHrFNGxuArStnfuJQLfVCJA%3d&risl=&pid=ImgRaw&r=0',
  },
  // Add more TV series data as needed
];

const HomeTVSeriesHeaderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tvSeriesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tvSeriesData.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="tv-series-header-container">
      <div className="banner-slider-wrapper">
        <button className="arrow-button prev-button" onClick={handlePrevSlide}>❮</button>
        <div className="banner-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {tvSeriesData.map((series, index) => (
            <div
              key={series.id}
              className={`banner-slide ${index === currentIndex ? 'active-slide' : ''}`}
              style={{ backgroundImage: `url(${series.imageUrl})` }}
            >
              <div className="slide-info-box">
                <h2>{series.name}</h2>
                <p><strong>Released:</strong> {series.releasedDate}</p>
                <p><strong>End Date:</strong> {series.endDate}</p>
                <p><strong>Status:</strong> {series.status}</p>
                <p><strong>Seasons:</strong> {series.seasons}</p>
                <p>{series.description}</p>
                <div className="action-buttons">
                  <button className="view-button">View</button>
                  <button className="fav-button">Add to Favorites</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-button next-button" onClick={handleNextSlide}>❯</button>
        <div className="slide-indicators">
          {tvSeriesData.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTVSeriesHeaderBanner;
