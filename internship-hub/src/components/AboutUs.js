import React from 'react';

const AboutUs = () => (
  <div id="about-us" style={styles.container}>
    <div style={styles.aboutSection}>
      <h1 style={styles.heading}>About Us</h1>
      <p>Welcome to our internship hub! Explore exciting opportunities with us.</p>
      <p>Learn more about Amlino Technologies Pvt Ltd and our commitment to innovation.</p>
    </div>

    <h2 style={styles.teamHeading}>Our Team</h2>
    <div style={styles.teamGrid}>
      <div style={styles.card}>
        <img src="/w3images/team1.jpg" alt="Jane" style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h2 style={styles.cardTitle}>Jane Doe</h2>
          <p style={styles.cardSubtitle}>CEO & Founder</p>
          <p style={styles.cardText}>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button style={styles.button}>Contact</button></p>
        </div>
      </div>

      <div style={styles.card}>
        <img src="/w3images/team2.jpg" alt="Mike" style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h2 style={styles.cardTitle}>Mike Ross</h2>
          <p style={styles.cardSubtitle}>Art Director</p>
          <p style={styles.cardText}>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button style={styles.button}>Contact</button></p>
        </div>
      </div>
      
      <div style={styles.card}>
        <img src="/w3images/team3.jpg" alt="John" style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h2 style={styles.cardTitle}>John Doe</h2>
          <p style={styles.cardSubtitle}>Designer</p>
          <p style={styles.cardText}>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button style={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>

    <div style={styles.quoteSection}>
      <blockquote style={styles.quote}>
        "Innovation distinguishes between a leader and a follower."
        <footer style={styles.quoteAuthor}>- Steve Jobs</footer>
      </blockquote>
    </div>

    <div style={styles.iconsSection}>
      <span className="icon" style={styles.icon}>
        <i className="fab fa-facebook-f"></i>
      </span>
      <span className="icon" style={styles.icon}>
        <i className="fab fa-twitter"></i>
      </span>
      <span className="icon" style={styles.icon}>
        <i className="fab fa-linkedin-in"></i>
      </span>
      <span className="icon" style={styles.icon}>
        <i className="fab fa-instagram"></i>
      </span>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  aboutSection: {
    textAlign: 'center',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  teamHeading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardImage: {
    width: '100%',
    display: 'block',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#333',
  },
  cardSubtitle: {
    color: 'grey',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
  button: {
    border: 'none',
    outline: '0',
    display: 'inline-block',
    padding: '8px 16px',
    color: 'white',
    backgroundColor: '#f44336',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  quoteSection: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '1.2rem',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#555',
  },
  quoteAuthor: {
    marginTop: '10px',
    textAlign: 'right',
    color: '#777',
  },
  iconsSection: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    color: '#333',
    margin: '0 10px',
  },
};

export default AboutUs;
