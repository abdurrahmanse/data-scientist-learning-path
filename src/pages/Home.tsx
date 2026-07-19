import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../routes/routePaths';
import SEO from '../components/common/SEO';

export default function Home() {
  return (
    <div className="animate-fade-in-up" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '3rem'
    }}>
      <SEO 
        title="Data Scientist Learning Path | Master Data Science" 
        description="The ultimate open-source roadmap to becoming a Data Scientist. Learn Python, Machine Learning, SQL, and Deep Learning with a structured curriculum."
        keywords="data science, roadmap, machine learning, python, tutorial, deep learning, sql"
      />
      
      <div style={{ 
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
      <h1 className="hero-title animate-fade-in-up delay-1">
        The Definitive <br />
        <span style={{ 
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Data Scientist</span> Learning Path
      </h1>
      <p className="hero-subtitle animate-fade-in-up delay-2" style={{ maxWidth: '650px', margin: '0 auto 3rem auto' }}>
        A comprehensive, step-by-step roadmap for anyone who wants to become a Data Scientist, starting from absolute beginner level to advanced professional level.
      </p>
      
      <div className="flex-stack animate-fade-in-up delay-3">
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
