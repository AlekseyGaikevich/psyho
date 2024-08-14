import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Offerta from './pages/Offerta';
import Privacy from './pages/Privacy';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offerta" element={<Offerta />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
