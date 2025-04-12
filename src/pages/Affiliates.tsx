import React from 'react';
import { Link } from 'react-router-dom';

const Affiliates: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#121212',
        color: 'white',
        overflow: 'hidden'
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
