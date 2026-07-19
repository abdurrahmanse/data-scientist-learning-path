import React from 'react';
import { Link } from 'react-router-dom';
import { Stage } from '../../types/roadmap.types';

interface RoadmapCardProps {
  stage: Stage;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ stage }) => {
  return (
    <div style={{
      padding: '1.5rem',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      marginBottom: '1rem',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
          Stage {stage.order}
        </span>
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>
          <Link to={`/roadmap/${stage.slug}`} style={{ color: 'var(--text-primary)' }}>
            {stage.title}
          </Link>
        </h2>
      </div>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{stage.description}</p>
      
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-tertiary)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
          {stage.topicIds.length} Topics
        </span>
      </div>
    </div>
  );
};

export default RoadmapCard;
