import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Map from './pages/Map';
import Report from './pages/Report';
import Volunteer from './pages/Volunteer';
import Alerts from './pages/Alerts';
import Resources from './pages/Resources';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/report" element={<Report />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;