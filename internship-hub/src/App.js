import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import InternshipOpportunities from './components/InternshipOpportunities';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import GridDataToPDF from './components/GridDataToPDF';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <InternshipOpportunities />
      <Testimonials />
      <ContactUs />
      <GridDataToPDF />
    </div>
  );
}

export default App;
