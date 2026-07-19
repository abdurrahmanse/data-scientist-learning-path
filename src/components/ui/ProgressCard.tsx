import React from 'react';
import { useProgress } from '../../contexts/ProgressContext';

const ProgressCard: React.FC = () => {
  const { completedTopicIds, totalTopics, completedPercentage } = useProgress();

  return (
    <div style={{
      marginTop: 'auto', // Pushes it to the bottom if in a flex column
      padding: '1rem',
      backgroundColor: 'var(--bg-secondary)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      marginBottom: '1rem'
    }}>
      <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
        Your Progress
      </h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
        <span>{completedTopicIds.length} / {totalTopics} Topics</span>
        <span style={{ fontWeight: 'bold' }}>{completedPercentage}%</span>
      </div>
      <div style={{ 
        width: '100%', 
        height: '6px', 
        backgroundColor: 'var(--bg-tertiary)', 
        borderRadius: '3px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${completedPercentage}%`, 
          height: '100%', 
          backgroundColor: 'var(--success)',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
};

export default ProgressCard;
