import React from 'react';
import aboutImage1 from '../assets/img/discuss.jpg';

const AboutUs = () => (
  <div id="about-us" style={styles.container}>
    <div style={styles.aboutSection}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>Welcome to our internship hub! Explore exciting opportunities with us.</p>
      <p style={styles.text}>Learn more about Amlino Technologies Pvt Ltd and our commitment to innovation.</p>
      <button style={styles.learnMoreButton}>Learn More</button>
    </div>

    <div style={styles.imageSection}>
      <img src={aboutImage1} alt="About Us" style={styles.image} />
    </div>
  </div>
);

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    padding: '40px',
    hight: '100vh',
    minHeight: '100vh', // Ensure minimum height is 100vh to fill viewport

    // backgroundColor: '#f9f9f9',
    // alignItems: 'center',
  },
  aboutSection: {
    textAlign: 'left',
    padding: '20px',
  },
  heading: {
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  text: {
    color: '#555',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  learnMoreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#6C63FF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default AboutUs;
