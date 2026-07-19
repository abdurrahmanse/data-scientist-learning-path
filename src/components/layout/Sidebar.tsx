import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dataService } from '../../services/dataService';
import { Stage } from '../../types/roadmap.types';
import ProgressCard from '../ui/ProgressCard';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    dataService.getStages().then(setStages);
  }, []);

  return (
    <>
      {isOpen && onClose && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}
      <aside className={`sidebar-container glass-panel ${isOpen ? 'open' : ''}`} style={{
        width: 'var(--sidebar-width)',
        padding: '2rem 1.5rem',
        borderRight: '1px solid var(--glass-border)',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        height: 'calc(100vh - var(--nav-height))',
        overflowY: 'auto'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            marginBottom: '2rem',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            fontWeight: '700',
            letterSpacing: '0.1em',
            borderBottom: '1px solid var(--glass-border)',
            paddingBottom: '0.75rem'
          }}>
            Learning Path
          </h3>

          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            position: 'relative',
            paddingLeft: '1rem'
          }}>
            {/* Vertical timeline line */}
            <div style={{
              position: 'absolute',
              left: '5px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(6,182,212,0.5), rgba(6,182,212,0.1))',
              zIndex: 0
            }}></div>

            {stages.map((stage, index) => (
              <NavLink
                key={stage.id}
                to={`/roadmap/${stage.slug}`}
                style={{ textDecoration: 'none' }}
                children={({ isActive }) => (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.75rem 0',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      const textEl = e.currentTarget.querySelector('.nav-text') as HTMLElement;
                      const dotEl = e.currentTarget.querySelector('.nav-dot') as HTMLElement;
                      if (!isActive) {
                        if (textEl) textEl.style.color = 'var(--text-primary)';
                        if (textEl) textEl.style.transform = 'translateX(5px)';
                        if (dotEl) dotEl.style.background = 'var(--accent-primary)';
                        if (dotEl) dotEl.style.boxShadow = '0 0 10px var(--accent-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const textEl = e.currentTarget.querySelector('.nav-text') as HTMLElement;
                      const dotEl = e.currentTarget.querySelector('.nav-dot') as HTMLElement;
                      if (!isActive) {
                        if (textEl) textEl.style.color = 'var(--text-secondary)';
                        if (textEl) textEl.style.transform = 'translateX(0)';
                        if (dotEl) dotEl.style.background = 'var(--glass-border)';
                        if (dotEl) dotEl.style.boxShadow = 'none';
                      }
                    }}>
                    {/* Timeline Dot */}
                    <div className="nav-dot" style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--glass-border)',
                      boxShadow: isActive ? '0 0 12px var(--accent-primary)' : 'none',
                      position: 'absolute',
                      left: '-16px',
                      zIndex: 1,
                      transition: 'all 0.3s ease'
                    }}></div>

                    {/* Number Badge */}
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      color: isActive ? 'var(--bg-primary)' : 'var(--text-tertiary)',
                      backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
                      padding: '0.15rem 0.4rem',
                      borderRadius: '4px',
                      marginRight: '0.75rem',
                      fontFamily: 'monospace',
                      transition: 'all 0.3s ease'
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Stage Title */}
                    <span className="nav-text" style={{
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? '700' : '600',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      textShadow: isActive ? '0 0 15px rgba(6,182,212,0.3)' : 'none'
                    }}>
                      {stage.title}
                    </span>
                  </div>
                )}
              />
            ))}
          </nav>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <ProgressCard />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
