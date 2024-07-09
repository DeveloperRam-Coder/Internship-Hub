import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact-us" className="section contact-us" style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>
      <div style={styles.formContainer}>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input style={styles.input} type="text" id="name" name="name" required />
          
          <label style={styles.label} htmlFor="email">Email</label>
          <input style={styles.input} type="email" id="email" name="email" required />
          
          <label style={styles.label} htmlFor="message">Message</label>
          <textarea style={styles.textarea} id="message" name="message" required></textarea>
          
          <button style={styles.button} type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  section: {
    border:' 1px solid black',

    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#ffe89c',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
    minHeight: '100px',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
};

export default ContactUs;
