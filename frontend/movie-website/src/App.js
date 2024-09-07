import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/Tvshows';
import Genre from './pages/Genre';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
      <Router>
      <Navbar />
      <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/tv-shows" element={<TvShows />} />
              <Route path="/Genre" element={<Genre />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
      </main>
      <Footer/>
  </Router>
    );
}

export default App;
