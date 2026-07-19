import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dataService } from '../../services/dataService';
import { Stage } from '../../types/roadmap.types';
import ProgressCard from '../ui/ProgressCard';

const Sidebar: React.FC = () => {
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    dataService.getStages().then(setStages);
  }, []);

  return (
    <aside style={{
      width: '280px',
      borderRight: '1px solid var(--border-color)',
      padding: '1.5rem',
      height: '100vh',
      overflowY: 'auto',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.875rem' }}>
          Learning Stages
        </h3>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {stages.map(stage => (
          <NavLink 
            key={stage.id} 
            to={`/roadmap/${stage.slug}`}
            style={({ isActive }) => ({
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
              color: isActive ? '#fff' : 'var(--text-primary)',
              fontWeight: isActive ? '500' : 'normal',
              textDecoration: 'none'
            })}
          >
            {stage.title}
          </NavLink>
        ))}
      </nav>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <ProgressCard />
      </div>
    </aside>
  );
};

export default Sidebar;
