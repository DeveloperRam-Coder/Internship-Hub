import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The internship at Amlino Technologies was a game-changer for my career.",
      author: "John Doe",
    },
    {
      text: "I learned so much during my time as an intern. Highly recommend!",
      author: "Jane Smith",
    },
    {
      text: "The team at Amlino is incredibly supportive and knowledgeable.",
      author: "Sam Wilson",
    },
  ];

  return (
    <div id="testimonials" className="section testimonials" style={styles.section}>
      <h2 style={styles.heading}>Testimonials</h2>
      <div style={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card" style={styles.card}>
            <p style={styles.quote}>"{testimonial.text}"</p>
            <p style={styles.author}>- {testimonial.author}</p>
          </div>
        ))}
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
  testimonialsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
  },
  quote: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    marginBottom: '1rem',
  },
  author: {
    fontSize: '1rem',
    color: '#555555',
  },
};

export default Testimonials;
