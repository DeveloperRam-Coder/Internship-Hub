import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import carouselImage1 from '../assets/img/carousel-1.jpg';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa'; // Import React Icons

const Home = () => {
  const sectionStyle = {
    height: '100vh', // Set section height to full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    position: 'relative', // Ensure the section is relative for absolute positioning of overlay
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${carouselImage1})`, // Background image with overlay
    backgroundSize: 'cover', // Cover entire section
    backgroundPosition: 'center', // Center align the background image
    fontFamily: 'Arial, sans-serif', // Font family for the entire section
    color: '#ffffff', // Text color
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%', // Position the overlay text/button at the center vertically
    left: '50%', // Position the overlay text/button at the center horizontally
    transform: 'translate(-50%, -50%)', // Center the overlay text/button
    textAlign: 'center',
    zIndex: 1, // Ensure overlay appears above the carousel images
    padding: '0 20px', // Add padding for better readability
  };

  const h1Style = {
    fontSize: '3rem', // Larger font size for the heading
    marginBottom: '1rem', // Some margin below the heading
    letterSpacing: '1px', // Letter spacing for the heading
  };

  const pStyle = {
    fontSize: '1.5rem', // Font size for the paragraphs
    lineHeight: '1.6', // Line height for better readability
  };

  const quoteStyle = {
    fontStyle: 'italic', // Italicize the quote
    marginTop: '2rem', // Margin top for separation
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    marginTop: '2rem', // Larger margin top for the button
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
      author: "Steve Jobs"
    },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div id="home" className="section home" style={sectionStyle}>
      <div style={overlayStyle}>
        <h1 style={h1Style}>Welcome to Internship Hub</h1>
        <p style={pStyle}>
          Internship Hub is your one-stop destination for finding the best internship opportunities. 
          Whether you're a student looking for hands-on experience or a recent graduate eager to kickstart 
          your career, we have the right opportunities for you.
        </p>
        <div style={quoteStyle}>
          <FaQuoteLeft size={30} color="#ffffff" />
          <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginTop: '1rem' }}>{randomQuote.text}</p>
          <p style={{ fontSize: '1rem', color: '#ffffff', marginTop: '0.5rem' }}>- {randomQuote.author}</p>
        </div>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Explore internship opportunities provided by Amlino Technologies Pvt Ltd.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, { backgroundColor: '#007bff' })}
          onClick={() => document.getElementById('internship-opportunities').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Internships <FaArrowRight style={{ marginLeft: '5px' }} />
        </button>
      </div>
    </div>
  );
};

export default Home;
