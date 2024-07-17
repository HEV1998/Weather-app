import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ForecastPage from './components/ForecastPage';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  console.log('App rendered');
  const backgroundStyle = {
    backgroundImage: "url(/Assets/skyscraper-horizon-city-architecture-preview.jpg)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={backgroundStyle}>
      <NavBar /> {/* This renders the navbar component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ForecastPage" element={<ForecastPage />} />
          </Routes>
          </div>
          <Footer /> {/* This renders the footer component */}
    </Router>
  );
}

export default App;
