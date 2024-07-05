import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import InternshipOpportunities from './components/InternshipOpportunities';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <InternshipOpportunities />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
