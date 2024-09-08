import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/Tvshows';
import Genre from './pages/Genre';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Ensure this includes the layout styles

function App() {
    return (
        <Router>
            <div className="page-wrapper">
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
                <Footer />
            </div>
        </Router>
    );
}

export default App;
