import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeTRMovies from '../components/HomeTRMovies'
import HomeMiddleBanner from '../components/HomeMiddleBanner'
import HomeTRSeries from '../components/HomeTRSeries'
import HomeTVSeriesHeaderBanner from '../components/HomeTVSeriesHeaderBanner'
import HomeGenre from '../components/HomeGenre'

export default function Home() {
  return (
    <div>
        <HomeHeader/>
        <HomeTRMovies/>
        <HomeMiddleBanner/>
        <HomeTRSeries/>
        <HomeTVSeriesHeaderBanner/>
        <HomeGenre/>
    </div>
  )
}
