import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/routePaths';

export default function Home() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '6rem 2rem',
      textAlign: 'center'
    }}>
      <div className="animate-fade-in-up" style={{ 
        display: 'inline-block',
        padding: '0.5rem 1rem', 
        borderRadius: '2rem', 
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        color: 'var(--accent-primary)',
        fontWeight: 'bold',
        marginBottom: '2rem',
        border: '1px solid rgba(6, 182, 212, 0.2)'
      }}>
        🚀 Version 2.0 Now Live
      </div>
      <h1 className="animate-fade-in-up delay-1" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: '800', letterSpacing: '-0.025em' }}>
        The Definitive <br />
        <span style={{ 
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Data Scientist</span> Learning Path
      </h1>
      <p className="animate-fade-in-up delay-2" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: 1.7 }}>
        A comprehensive, step-by-step roadmap for anyone who wants to become a Data Scientist, starting from absolute beginner level to advanced professional level.
      </p>
      
      <div className="animate-fade-in-up delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link 
          to={PATHS.ROADMAP}
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(6, 182, 212, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(6, 182, 212, 0.3)';
          }}
        >
          View Roadmap
        </Link>
        <a 
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="glass-panel"
          style={{
            color: 'var(--text-primary)',
            padding: '1rem 2rem',
            borderRadius: '2rem',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
