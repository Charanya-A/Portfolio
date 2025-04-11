import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const shoutOuts = [
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Git', url: 'https://git-scm.com/' },
  { name: 'GitHub', url: 'https://github.com/' },
  { name: 'VS Code', url: 'https://code.visualstudio.com/' },
  { name: 'Vercel', url: 'https://vercel.com/' },
  { name: 'Vite', url: 'https://vitejs.dev/' },
];

const ShoutOut: React.FC = () => {
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
        {'>'} Shout Outs
      </p>

      <h2 style={{ marginTop: '1rem' }}>Shout Outs</h2>

      <ul style={{ marginTop: '1.5rem', lineHeight: '2' }}>
        {shoutOuts.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <FaChevronRight style={{ marginRight: '0.5rem', color: 'white' }} />
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3b82f6', textDecoration: 'none' }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoutOut;
