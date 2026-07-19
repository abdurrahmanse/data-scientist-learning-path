import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/routePaths';
import { Code2, Github } from 'lucide-react';
import '../../styles/variables.css';

const Navbar: React.FC = () => {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <Link to={PATHS.HOME} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
        <Code2 size={24} color="var(--accent-primary)" />
        <span>Data Scientist Path</span>
      </Link>
      
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to={PATHS.ROADMAP}>Roadmap</Link>
        <Link to={PATHS.RESOURCES}>Resources</Link>
        <Link to={PATHS.PROJECTS}>Projects</Link>
        <Link to={PATHS.GLOSSARY}>Glossary</Link>
      </nav>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>
          <Github size={20} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
