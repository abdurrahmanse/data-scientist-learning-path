import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Sun, Moon, Menu } from 'lucide-react';
import GlobalSearch from '../common/GlobalSearch';
import { useTheme } from '../../hooks/useTheme';
import { PATHS } from '../../routes/routePaths';
import { Code2, Globe } from 'lucide-react';

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="glass-panel" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {onMenuClick && (
            <button 
              onClick={onMenuClick}
              className="mobile-menu-btn"
              style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}
            >
              <Menu size={24} />
            </button>
          )}
          <NavLink to={PATHS.HOME} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.025em' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', padding: '0.5rem', borderRadius: 'var(--radius-sm)', display: 'flex' }}>
              <Code2 size={20} color="#fff" />
            </div>
            <span>Data Scientist Path</span>
          </NavLink>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: '500' }}>
            <NavLink to={PATHS.ROADMAP}>Roadmap</NavLink>
            <NavLink to={PATHS.RESOURCES}>Resources</NavLink>
            <NavLink to={PATHS.PROJECTS}>Projects</NavLink>
            <NavLink to={PATHS.GLOSSARY}>Glossary</NavLink>

            <button
              onClick={() => setIsSearchOpen(true)}
              style={{
                background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', cursor: 'pointer',
                color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem', borderRadius: 'var(--radius-lg)', transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <Search size={16} />
              <span style={{ fontSize: '0.875rem' }}>Search...</span>
            </button>
          </nav>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <button
              onClick={toggleTheme}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
             onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Globe size={22} />
          </a>
        </div>
      </header>
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
