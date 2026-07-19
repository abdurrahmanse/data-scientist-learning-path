import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-tertiary)',
      marginTop: 'auto'
    }}>
      <p>&copy; {new Date().getFullYear()} Data Scientist Learning Path. Built for the community.</p>
    </footer>
  );
};

export default Footer;
