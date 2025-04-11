import React from 'react';
import { Link } from 'react-router-dom';

const Affiliates: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'left',
      }}
    >
      <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
          Home
        </Link>{' '}
        &gt; Affiliates
      </p>

      <h2 style={{ marginTop: '1rem' }}>Affiliates</h2>
    </div>
  );
};

export default Affiliates;