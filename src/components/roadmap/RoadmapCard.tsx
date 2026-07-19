import React from 'react';
import { Link } from 'react-router-dom';
import { Stage } from '../../types/roadmap.types';

interface RoadmapCardProps {
  stage: Stage;
  index?: number;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ stage, index = 0 }) => {
  // Stagger animation based on index
  const delayClass = `delay-${(index % 5) + 1}`;

  return (
    <Link to={`/roadmap/${stage.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div 
        className={`glass-panel animate-fade-in-up ${delayClass}`}
        style={{
          padding: '1.5rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '0',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
          e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
          e.currentTarget.style.borderColor = 'var(--glass-border)';
          e.currentTarget.style.background = 'var(--glass-bg)';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{ 
            fontSize: '0.875rem', 
            color: 'var(--accent-primary)', 
            fontWeight: '800',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Stage {stage.order}
          </span>
          <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700', letterSpacing: '-0.025em' }}>
            {stage.title}
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.125rem', lineHeight: '1.6', flex: 1 }}>
          {stage.description}
        </p>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
          <span className="glass-pill" style={{ color: 'var(--accent-primary)', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
            {stage.topicIds.length} Topics
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RoadmapCard;
