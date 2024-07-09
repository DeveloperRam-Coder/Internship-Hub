import React from 'react';
import { FaCode, FaServer, FaDatabase, FaMobileAlt, FaDesktop } from 'react-icons/fa'; // Importing icons from React Icons

const InternshipOpportunities = () => {
  // Function to open Google Form in a new tab
  const openGoogleForm = () => {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSderypPWTlyJUY8mJl_bEkDH-qIKRXmQEfesD5EkpD_5jpARQ/viewform?usp=sf_link"; // Replace with your Google Form URL
    window.open(googleFormUrl, "_blank");
  };

  return (
    <div id="internship-opportunities" style={styles.section}>
      <div className="opportunities-container">
        {/* Frontend Development */}
        <div className="opportunity-card" style={styles.card}>
          <div style={styles.cardContent}>
            <FaCode style={styles.icon} />
            <h2 className="opportunity-heading">Frontend Development</h2>
          </div>
          <button className="apply-button" style={styles.applyButton} onClick={openGoogleForm}>Apply Now</button>
        </div>

        {/* Backend Development */}
        <div className="opportunity-card" style={styles.card}>
          <div style={styles.cardContent}>
            <FaServer style={styles.icon} />
            <h2 className="opportunity-heading">Backend Development</h2>
          </div>
          <button className="apply-button" style={styles.applyButton} onClick={openGoogleForm}>Apply Now</button>
        </div>

        {/* Full Stack Development */}
        <div className="opportunity-card" style={styles.card}>
          <div style={styles.cardContent}>
            <FaDatabase style={styles.icon} />
            <h2 className="opportunity-heading">Full Stack Development</h2>
          </div>
          <button className="apply-button" style={styles.applyButton} onClick={openGoogleForm}>Apply Now</button>
        </div>

        {/* Additional Technology Cards */}
        <div className="opportunity-card" style={styles.card}>
          <div style={styles.cardContent}>
            <FaMobileAlt style={styles.icon} />
            <h2 className="opportunity-heading">Mobile App Development</h2>
          </div>
          <button className="apply-button" style={styles.applyButton} onClick={openGoogleForm}>Apply Now</button>
        </div>

        <div className="opportunity-card" style={styles.card}>
          <div style={styles.cardContent}>
            <FaDesktop style={styles.icon} />
            <h2 className="opportunity-heading">UI/UX Design</h2>
          </div>
          <button className="apply-button" style={styles.applyButton} onClick={openGoogleForm}>Apply Now</button>
        </div>

        {/* Example: Add more technology cards as needed */}
      </div>
    </div>
  );
};

const styles = {
  section: {
    border:' 1px solid black',

    height: '100vh',
    padding: '100px',
    backgroundColor: '#ffe89c',
    fontFamily: 'Arial, sans-serif',
  },
  opportunitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between', // Adjust alignment here
    alignItems: 'center', // Center vertically
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    marginTop: '10px',
    position: 'relative', // Enable hover effect positioning
    cursor: 'pointer',
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'left',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  opportunityHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333', // Text color
  },
  opportunityText: {
    color: '#666666',
    marginBottom: '5px',
  },
  applyButton: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
  },
  applyButtonHover: {
    backgroundColor: '#0056b3',
  },
  icon: {
    fontSize: '2rem',
    color: '#007bff', // Icon color
  },
};

export default InternshipOpportunities;
