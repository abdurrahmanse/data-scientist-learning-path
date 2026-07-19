import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/routePaths';

export default function Home() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
        The Definitive <br />
        <span style={{ color: 'var(--accent-primary)' }}>Data Scientist</span> Learning Path
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        A comprehensive, step-by-step roadmap for anyone who wants to become a Data Scientist, starting from absolute beginner level to advanced professional level.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link 
          to={PATHS.ROADMAP}
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}
        >
          View Roadmap
        </Link>
        <a 
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
