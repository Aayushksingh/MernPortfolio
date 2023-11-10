import React from 'react';

const Contact = () => {
  const sectionStyle = {
    width: '100%',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#4d988a',
  };

  const blockquoteStyle = {
    margin: '10px 0',
    padding: '10px 20px',
    borderLeft: '4px solid #4d988a',
    backgroundColor: '#f5f5f5',
    color: '#555',
    fontStyle: 'italic',
    transition: 'background 0.3s, transform 0.3s',
  };

  const handleHover = (e) => {
    e.target.style.background = '#4d988a';
    e.target.style.transform = 'translateX(20px)';
  };

  const handleMouseOut = (e) => {
    e.target.style.background = '#f5f5f5';
    e.target.style.transform = 'translateX(2px)';
  };

  return (
    <section style={sectionStyle}>
      <h2>Contact</h2>
      <p style={paragraphStyle}>
        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels.
      </p>
      <ul style={listStyle}>
      </ul>
      <p style={paragraphStyle}>
        I'm very friendly and always interested in engaging conversations to expand my knowledge. Here are a few quotes and jokes to lighten the mood:
      </p>
      <blockquote
        style={blockquoteStyle}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        "The best way to predict the future is to invent it." - Alan Kay
      </blockquote>
      <blockquote
        style={blockquoteStyle}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        "Why don't scientists trust atoms? Because they make up everything!" - Anonymous
      </blockquote>
      <blockquote
        style={blockquoteStyle}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        "It's not a bug, it's a feature." - Anonymous
      </blockquote>
      <p style={paragraphStyle}>
        I'm looking forward to connecting with you!
      </p>
    </section>
  );
};

export default Contact;