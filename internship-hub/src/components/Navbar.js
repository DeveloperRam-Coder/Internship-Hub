import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const navStyle = {
    // position: 'fixed',
    top: 0,
    width: '100%',
    background: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const itemStyle = {
    margin: '0 1rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
  };

  const hoverEffect = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'blue',
  };

  return (
    <nav style={navStyle}>
      {['home', 'about-us', 'internship-opportunities', 'testimonials', 'contact-us', 'gridDataToPDF'].map((section) => (
        <div
          key={section}
          style={itemStyle}
          onClick={() => scrollToSection(section)}
          onMouseOver={(e) => Object.assign(e.target.style, hoverEffect)}
          onMouseOut={(e) => Object.assign(e.target.style, { boxShadow: 'none', backgroundColor: 'transparent' })}
        >
          {section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
